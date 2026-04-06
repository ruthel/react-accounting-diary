export interface IDataItem {
  id?: string;
  date: string;
  text: string;
  isDebit?: boolean;
  amount: number;
  account: string;
  currency: string;
  local?: string;
}

let _counter = 0;
export const generateId = (): string =>
  `txn_${Date.now()}_${++_counter}`;

export interface IStyleConfig {
  width?: number;
  backgroundColor?: string;
  fontWeight?: string;
  color?: string;
  background?: string;
}

export interface ILabels {
  debit?: string;
  credit?: string;
  description?: string;
  transactionEntries?: string;
  addTransaction?: string;
  editTransaction?: string;
  modifyDescription?: string;
  addDescription?: string;
  amount?: string;
  currency?: string;
  account?: string;
  date?: string;
  debitTransaction?: string;
  save?: string;
  update?: string;
  cancel?: string;
  export?: string;
  clear?: string;
  sample?: string;
  search?: string;
  to?: string;
  noData?: string;
  grandTotal?: string;
  balance?: string;
  balanced?: string;
  unbalanced?: string;
  page?: string;
  of?: string;
  edit?: string;
  delete?: string;
  actions?: string;
}

export const defaultLabels: Required<ILabels> = {
  debit: 'Debit',
  credit: 'Credit',
  description: 'Description',
  transactionEntries: 'Transaction entries',
  addTransaction: 'Add Transaction',
  editTransaction: 'Edit Transaction',
  modifyDescription: 'Modify the transaction details.',
  addDescription: 'Add a new entry to your accounting diary.',
  amount: 'Amount',
  currency: 'Currency',
  account: 'Account',
  date: 'Date',
  debitTransaction: 'Debit transaction',
  save: 'Save',
  update: 'Update',
  cancel: 'Cancel',
  export: 'Export',
  clear: 'Clear',
  sample: 'Data Sample',
  search: 'Search...',
  to: 'to',
  noData: 'No transactions yet.',
  grandTotal: 'Grand Total',
  balance: 'Balance',
  balanced: 'Balanced',
  unbalanced: 'Unbalanced',
  page: 'Page',
  of: 'of',
  edit: 'Edit',
  delete: 'Delete',
  actions: 'Actions',
};

export type SortField = 'date' | 'account' | 'amount';
export type SortOrder = 'asc' | 'desc';
