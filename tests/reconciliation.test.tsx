import React, { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useAccountingDiary } from '../src/lib/useAccountingDiary';
import AccountingDiaryWrapper from '../src/lib/AccountingDiaryWrapper';
import PeriodChart from '../src/lib/PeriodChart';
import { filterTransactions, summarizeByPeriod } from '../src/lib/helpers/transactions';
import type { AccountingDiaryHandle, IDataItem } from '../src/types/common';

const data: IDataItem[] = [
  { id: 'legacy', date: '2026-01-01', account: 'Bank', text: 'Legacy rent', amount: 100, currency: 'USD', isDebit: true, category: 'Rent', tags: ['monthly'] },
  { id: 'cleared', date: '2026-01-31', account: 'Bank', text: 'Cleared payment', amount: 40, currency: 'USD', reconciled: true },
  { id: 'open', date: '2026-02-01', account: 'Cash', text: 'Open sale', amount: 20, currency: 'EUR', isDebit: true, reconciled: false },
];
afterEach(cleanup);

describe('shared transaction calculations', () => {
  it('includes legacy data in unreconciled and combines inclusive filters', () => {
    expect(filterTransactions(data)).toEqual(data);
    expect(filterTransactions(data, { reconciliation: 'reconciled' }).map(x => x.id)).toEqual(['cleared']);
    expect(filterTransactions(data, { reconciliation: 'unreconciled' }).map(x => x.id)).toEqual(['legacy', 'open']);
    expect(filterTransactions(data, { reconciliation: 'unreconciled', account: 'Bank', category: 'Rent', searchTerm: 'MONTHLY', start: '2026-01-01', end: '2026-01-01' })).toEqual([data[0]]);
    expect(data[0].reconciled).toBeUndefined();
  });
  it('aggregates calendar periods, keeps currencies separate and skips invalid dates', () => {
    const rows = summarizeByPeriod([...data, { ...data[0], currency: 'EUR', amount: 5 }, { ...data[0], date: '2026-02-30' }]);
    expect(rows).toEqual([
      { period: '2026-01', currency: 'EUR', debit: 5, credit: 0, balance: 5, count: 1, isBalanced: false },
      { period: '2026-01', currency: 'USD', debit: 100, credit: 40, balance: 60, count: 2, isBalanced: false },
      { period: '2026-02', currency: 'EUR', debit: 20, credit: 0, balance: 20, count: 1, isBalanced: false },
    ]);
    expect(summarizeByPeriod(data, 'day')).toHaveLength(3);
    expect(summarizeByPeriod(data, 'year').map(x => x.period)).toEqual(['2026', '2026']);
    expect(summarizeByPeriod([])).toEqual([]);
    expect(summarizeByPeriod([data[0], { ...data[1], amount: 100 }])[0].isBalanced).toBe(true);
  });
});

describe('headless hook', () => {
  it('reconciles through edit validation, notifies and supports undo/redo and JSON', async () => {
    const onChange = vi.fn();
    const onBeforeEdit = vi.fn(() => true);
    const { result } = renderHook(() => useAccountingDiary({ initialData: data, onChange, onBeforeEdit }));
    await act(async () => { expect(await result.current.setReconciled('legacy', true)).toBe(true); });
    expect(onBeforeEdit).toHaveBeenCalledWith(data[0], expect.objectContaining({ reconciled: true }));
    expect(onChange).toHaveBeenCalledTimes(1);
    act(() => result.current.setReconciliationFilter('reconciled'));
    expect(result.current.filteredData).toHaveLength(2);
    expect(result.current.periodSummary[0].balance).toBe(60);
    // Existing totals retain their all-data semantics.
    expect(result.current.totals.balance).toBe(80);
    act(() => result.current.undo());
    expect(result.current.filteredData).toHaveLength(1);
    act(() => result.current.redo());
    expect(JSON.parse(result.current.exportJSON())[0].reconciled).toBe(true);
    await act(async () => { expect(await result.current.setReconciled('missing', true)).toBe(false); });
    act(() => result.current.importJSON(JSON.stringify([{ ...data[2], id: 'imported', reconciled: true }])));
    expect(result.current.filteredData).toHaveLength(3);
  });
  it('honours async rejection without changing history', async () => {
    const { result } = renderHook(() => useAccountingDiary({ initialData: data, onBeforeEdit: async () => false }));
    await act(async () => { expect(await result.current.setReconciled('legacy', true)).toBe(false); });
    expect(result.current.data[0].reconciled).toBeUndefined();
    expect(result.current.canUndo).toBe(false);
  });
  it('supports legacy IDs, add/edit/delete and history branching', async () => {
    const { result } = renderHook(() => useAccountingDiary({ initialData: [{ ...data[0], id: undefined }] }));
    const id = result.current.data[0].id!;
    expect(id).toBeTruthy();
    await act(async () => { await result.current.setReconciled(id, true); });
    await act(async () => { await result.current.addTransaction(data[2]); });
    act(() => result.current.undo());
    await act(async () => { await result.current.deleteTransaction(id); });
    expect(result.current.data).toEqual([]);
    expect(result.current.canRedo).toBe(false);
    act(() => result.current.setFilters({ reconciliation: 'all', account: 'Cash' }));
    expect(result.current.filteredData).toEqual([]);
  });
  it('does not lose intervening changes while awaiting edit validation', async () => {
    let approve!: (value: boolean) => void;
    const validator = new Promise<boolean>(resolve => { approve = resolve; });
    const { result } = renderHook(() => useAccountingDiary({ initialData: data, onBeforeEdit: () => validator }));
    let pending!: Promise<boolean>;
    act(() => { pending = result.current.setReconciled('legacy', true); });
    act(() => result.current.importJSON(JSON.stringify([{ ...data[2], id: 'new' }])));
    await act(async () => { approve(true); expect(await pending).toBe(true); });
    expect(result.current.data).toHaveLength(4);
    act(() => result.current.undo());
    expect(result.current.data).toHaveLength(4);
    expect(result.current.data[0].reconciled).toBeUndefined();
  });
});

describe('component and ref API', () => {
  it('notifies a controlled parent once after commit in StrictMode', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const onChange = vi.fn();
    const ref = createRef<AccountingDiaryHandle>();
    function Controlled() {
      const [entries, setEntries] = React.useState(data);
      return <AccountingDiaryWrapper ref={ref} data={entries} onChange={next => { onChange(next); setEntries(next); }} />;
    }
    try {
      render(<React.StrictMode><Controlled /></React.StrictMode>);
      await act(async () => { await ref.current!.setReconciled('legacy', true); });
      expect(onChange).toHaveBeenCalledTimes(1);
      act(() => ref.current!.undo());
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(ref.current!.getData()[0].reconciled).toBeUndefined();
      expect(error).not.toHaveBeenCalled();
    } finally { error.mockRestore(); }
  });
  it('filters before pagination and chart summaries, and reconciles with undo/redo', async () => {
    const ref = createRef<AccountingDiaryHandle>();
    const onEdit = vi.fn();
    render(<AccountingDiaryWrapper ref={ref} data={data} showPeriodChart pageSize={1} onEdit={onEdit} />);
    expect(ref.current!.getPeriodSummary()).toHaveLength(2);
    fireEvent.change(screen.getByLabelText('Reconciliation'), { target: { value: 'reconciled' } });
    expect(ref.current!.getFilteredData().map(x => x.id)).toEqual(['cleared']);
    expect(ref.current!.getPeriodSummary()[0].balance).toBe(-40);
    await act(async () => { expect(await ref.current!.setReconciled('legacy', true)).toBe(true); });
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(ref.current!.getFilteredData()).toHaveLength(2);
    act(() => ref.current!.undo());
    expect(ref.current!.getFilteredData()).toHaveLength(1);
    act(() => ref.current!.redo());
    expect(ref.current!.getFilteredData()).toHaveLength(2);
    act(() => ref.current!.setReconciliationFilter('unreconciled'));
    expect(ref.current!.getFilteredData().map(x => x.id)).toEqual(['open']);
    expect(ref.current!.getData()).toHaveLength(3);
  });
  it('rejects ref edits and leaves explicitly empty data empty', async () => {
    const ref = createRef<AccountingDiaryHandle>();
    const { rerender } = render(<AccountingDiaryWrapper ref={ref} data={data} onBeforeEdit={async () => false} />);
    await act(async () => { expect(await ref.current!.setReconciled('legacy', true)).toBe(false); });
    expect(ref.current!.getData()[0].reconciled).toBeUndefined();
    rerender(<AccountingDiaryWrapper ref={ref} data={[]} />);
    await waitFor(() => expect(ref.current!.getData()).toEqual([]));
    expect(screen.getByText('No transactions yet.')).toBeTruthy();
  });
  it('edits reconciliation in the dialog and exposes row actions', async () => {
    const ref = createRef<AccountingDiaryHandle>();
    render(<AccountingDiaryWrapper ref={ref} data={[data[0]]} />);
    fireEvent.click(screen.getByTitle('Actions'));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Reconciled' }));
    await waitFor(() => expect(ref.current!.getData()[0].reconciled).toBe(true));
    fireEvent.click(screen.getByTitle('Actions'));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }));
    fireEvent.click(screen.getByLabelText('Reconciled'));
    fireEvent.click(screen.getByText('Update'));
    await waitFor(() => expect(ref.current!.getData()[0].reconciled).toBe(false));
  });
  it('honours controlled replacements after edits and discards obsolete history', async () => {
    const ref = createRef<AccountingDiaryHandle>();
    const { rerender } = render(<AccountingDiaryWrapper ref={ref} data={data} />);
    await act(async () => { await ref.current!.setReconciled('legacy', true); });
    rerender(<AccountingDiaryWrapper ref={ref} data={[data[2]]} />);
    await waitFor(() => expect(ref.current!.getData().map(x => x.id)).toEqual(['open']));
    act(() => ref.current!.undo());
    expect(ref.current!.getData().map(x => x.id)).toEqual(['open']);
  });
  it('applies reconciliation to the ledger view and shows the status', () => {
    render(<AccountingDiaryWrapper data={data} />);
    fireEvent.click(screen.getByTitle('Ledger View'));
    fireEvent.change(screen.getByLabelText('Reconciliation'), { target: { value: 'reconciled' } });
    expect(screen.getByText('Cleared payment')).toBeTruthy();
    expect(screen.queryByText('Legacy rent')).toBeNull();
    expect(screen.queryByText('Open sale')).toBeNull();
  });
  it('renders accessible numeric bars, custom labels and an empty state', () => {
    const { rerender } = render(<PeriodChart data={data} labels={{ periodSummary: 'Monthly movement' }} />);
    expect(screen.getByRole('region', { name: 'Monthly movement' })).toBeTruthy();
    expect(screen.getByText('USD')).toBeTruthy();
    expect(screen.getByText('60')).toBeTruthy();
    rerender(<PeriodChart data={[]} />);
    expect(screen.getByText('No transactions yet.')).toBeTruthy();
  });
});
