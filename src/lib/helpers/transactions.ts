import type { IDataItem, PeriodGranularity, PeriodSummary, TransactionFilters } from '../../types/common';

/** Shared filtering for the UI and headless hook. Only true means reconciled. */
export function filterTransactions(data: IDataItem[], filters: TransactionFilters = {}): IDataItem[] {
  const term = filters.searchTerm?.toLowerCase();
  return data.filter(item => {
    if (filters.reconciliation === 'reconciled' && item.reconciled !== true) return false;
    if (filters.reconciliation === 'unreconciled' && item.reconciled === true) return false;
    if (filters.start && item.date < filters.start) return false;
    if (filters.end && item.date > filters.end) return false;
    if (filters.account && item.account !== filters.account) return false;
    if (filters.category && item.category !== filters.category) return false;
    return !term || [item.text, item.account, item.category, ...(item.tags || [])]
      .some(value => value?.toLowerCase().includes(term));
  });
}

/** Calendar date strings (YYYY-MM-DD), without timezone conversion. Invalid dates are omitted. */
export function summarizeByPeriod(data: IDataItem[], granularity: PeriodGranularity = 'month'): PeriodSummary[] {
  const groups = new Map<string, PeriodSummary>();
  for (const item of data) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date)) continue;
    const date = new Date(`${item.date}T00:00:00Z`);
    if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== item.date) continue;
    const period = item.date.slice(0, granularity === 'year' ? 4 : granularity === 'month' ? 7 : 10);
    const currency = item.currency || 'USD';
    const key = JSON.stringify([period, currency]);
    const summary = groups.get(key) || { period, currency, debit: 0, credit: 0, balance: 0, count: 0, isBalanced: true };
    if (item.isDebit) summary.debit += item.amount;
    else summary.credit += item.amount;
    summary.count++;
    summary.balance = summary.debit - summary.credit;
    summary.isBalanced = Math.abs(summary.balance) < 0.01;
    groups.set(key, summary);
  }
  return [...groups.values()].sort((a, b) => a.period.localeCompare(b.period) || a.currency.localeCompare(b.currency));
}
