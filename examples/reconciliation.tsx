import React, { useRef } from 'react';
import AccountingDiary, { PeriodChart, useAccountingDiary } from 'react-accounting-diary';
import type { AccountingDiaryHandle, IDataItem } from 'react-accounting-diary';

const entries: IDataItem[] = [
  { id: 'rent', date: '2026-10-01', text: 'Rent', account: 'Bank', isDebit: true, amount: 500, currency: 'USD' },
  { id: 'payment', date: '2026-10-02', text: 'Payment', account: 'Revenue', amount: 500, currency: 'USD', reconciled: true },
];

export function DiaryExample() {
  const ref = useRef<AccountingDiaryHandle>(null);
  return <>
    <button onClick={() => { void ref.current?.setReconciled('rent', true); }}>Reconcile rent</button>
    <AccountingDiary ref={ref} data={entries} showPeriodChart periodGranularity="month" />
  </>;
}

export function HeadlessExample() {
  const diary = useAccountingDiary({ initialData: entries, initialFilters: { reconciliation: 'all' } });
  return <>
    <button onClick={() => diary.setReconciliationFilter('unreconciled')}>Show unreconciled</button>
    <button onClick={() => diary.setReconciliationFilter('all')}>Show all</button>
    <button onClick={() => { void diary.setReconciled('rent', true); }}>Reconcile rent</button>
    <PeriodChart data={diary.filteredData} />
    <pre>{JSON.stringify(diary.periodSummary, null, 2)}</pre>
  </>;
}
