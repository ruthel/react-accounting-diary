import { useState, useCallback, useMemo } from 'react';
import { IDataItem, generateId, UseAccountingDiaryOptions, UseAccountingDiaryReturn } from '../types/common';

export const useAccountingDiary = (options: UseAccountingDiaryOptions = {}): UseAccountingDiaryReturn => {
  const { initialData = [], onChange, onBeforeAdd, onBeforeEdit, onBeforeDelete } = options;

  const [history, setHistory] = useState<IDataItem[][]>([initialData]);
  const [doIndex, setDoIndex] = useState(0);

  const data = history[doIndex];

  const pushState = useCallback((newData: IDataItem[]) => {
    setHistory(prev => {
      const trimmed = prev.slice(0, doIndex + 1);
      return [...trimmed, newData];
    });
    setDoIndex(prev => prev + 1);
    onChange?.(newData);
  }, [doIndex, onChange]);

  const addTransaction = useCallback(async (item: Omit<IDataItem, 'id'>) => {
    const newItem: IDataItem = { ...item, id: generateId() };
    if (onBeforeAdd && !(await onBeforeAdd(newItem))) return false;
    pushState([...data, newItem]);
    return true;
  }, [data, pushState, onBeforeAdd]);

  const editTransaction = useCallback(async (id: string, updates: Partial<IDataItem>) => {
    const idx = data.findIndex(d => d.id === id);
    if (idx === -1) return false;
    const oldItem = data[idx];
    const newItem = { ...oldItem, ...updates };
    if (onBeforeEdit && !(await onBeforeEdit(oldItem, newItem))) return false;
    const newData = [...data];
    newData[idx] = newItem;
    pushState(newData);
    return true;
  }, [data, pushState, onBeforeEdit]);

  const deleteTransaction = useCallback(async (id: string) => {
    const item = data.find(d => d.id === id);
    if (!item) return false;
    if (onBeforeDelete && !(await onBeforeDelete(item))) return false;
    pushState(data.filter(d => d.id !== id));
    return true;
  }, [data, pushState, onBeforeDelete]);

  const undo = useCallback(() => {
    if (doIndex > 0) {
      setDoIndex(prev => prev - 1);
      onChange?.(history[doIndex - 1]);
    }
  }, [doIndex, history, onChange]);

  const redo = useCallback(() => {
    if (doIndex + 1 < history.length) {
      setDoIndex(prev => prev + 1);
      onChange?.(history[doIndex + 1]);
    }
  }, [doIndex, history, onChange]);

  const totals = useMemo(() => {
    const debit = data.filter(d => d.isDebit).reduce((s, d) => s + d.amount, 0);
    const credit = data.filter(d => !d.isDebit).reduce((s, d) => s + d.amount, 0);
    return { debit, credit, balance: debit - credit, isBalanced: Math.abs(debit - credit) < 0.01 };
  }, [data]);

  const accountSummary = useMemo(() => {
    const summary: Record<string, { debit: number; credit: number; balance: number }> = {};
    for (const item of data) {
      if (!summary[item.account]) summary[item.account] = { debit: 0, credit: 0, balance: 0 };
      if (item.isDebit) summary[item.account].debit += item.amount;
      else summary[item.account].credit += item.amount;
      summary[item.account].balance = summary[item.account].debit - summary[item.account].credit;
    }
    return summary;
  }, [data]);

  const importJSON = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json) as IDataItem[];
      const withIds = parsed.map(item => ({ ...item, id: item.id || generateId() }));
      pushState([...data, ...withIds]);
    } catch { /* ignore invalid JSON */ }
  }, [data, pushState]);

  const exportJSON = useCallback(() => JSON.stringify(data, null, 2), [data]);

  return {
    data,
    addTransaction,
    editTransaction,
    deleteTransaction,
    undo,
    redo,
    canUndo: doIndex > 0,
    canRedo: doIndex + 1 < history.length,
    totals,
    accountSummary,
    importJSON,
    exportJSON,
  };
};
