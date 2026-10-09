import { IDataItem, PeriodGranularity, PeriodSummary, TransactionFilters } from '../../types/common';
/** Shared filtering for the UI and headless hook. Only true means reconciled. */
export declare function filterTransactions(data: IDataItem[], filters?: TransactionFilters): IDataItem[];
/** Calendar date strings (YYYY-MM-DD), without timezone conversion. Invalid dates are omitted. */
export declare function summarizeByPeriod(data: IDataItem[], granularity?: PeriodGranularity): PeriodSummary[];
