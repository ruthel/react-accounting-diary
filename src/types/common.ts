export interface IDataItem {
  id?: string;
  date: string;
  text: string;
  isDebit?: boolean;
  amount: number;
  account: string;
  currency: string;
  local?: string;
  category?: string;
  tags?: string[];
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
  category?: string;
  tags?: string;
  ledgerView?: string;
  diaryView?: string;
  runningBalance?: string;
  importJSON?: string;
  templates?: string;
  filterByAccount?: string;
  filterByCategory?: string;
  allAccounts?: string;
  allCategories?: string;
  dropFileHere?: string;
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
  category: 'Category',
  tags: 'Tags',
  ledgerView: 'Ledger View',
  diaryView: 'Diary View',
  runningBalance: 'Running Balance',
  importJSON: 'Import JSON',
  templates: 'Templates',
  filterByAccount: 'Filter by account',
  filterByCategory: 'Filter by category',
  allAccounts: 'All accounts',
  allCategories: 'All categories',
  dropFileHere: 'Drop CSV or JSON file here',
};

export type SortField = 'date' | 'account' | 'amount';
export type SortOrder = 'asc' | 'desc';
export type ViewMode = 'diary' | 'ledger';

export interface AccountingDiaryHandle {
  exportToPNG: () => Promise<void>;
  exportToJPEG: () => Promise<void>;
  exportToPDF: () => Promise<void>;
  exportToCSV: () => void;
  exportToExcel: () => void;
  exportToJSON: () => void;
  importJSON: (json: string) => void;
  addTransaction: (item: Omit<IDataItem, 'id'>) => void;
  undo: () => void;
  redo: () => void;
  getData: () => IDataItem[];
  getTotals: () => { debit: number; credit: number; balance: number; isBalanced: boolean };
  getAccountSummary: () => Record<string, { debit: number; credit: number; balance: number }>;
}

export interface UseAccountingDiaryOptions {
  initialData?: IDataItem[];
  onChange?: (data: IDataItem[]) => void;
  onBeforeAdd?: (item: IDataItem) => boolean | Promise<boolean>;
  onBeforeEdit?: (oldItem: IDataItem, newItem: IDataItem) => boolean | Promise<boolean>;
  onBeforeDelete?: (item: IDataItem) => boolean | Promise<boolean>;
}

export interface UseAccountingDiaryReturn {
  data: IDataItem[];
  addTransaction: (item: Omit<IDataItem, 'id'>) => Promise<boolean>;
  editTransaction: (id: string, updates: Partial<IDataItem>) => Promise<boolean>;
  deleteTransaction: (id: string) => Promise<boolean>;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  totals: { debit: number; credit: number; balance: number; isBalanced: boolean };
  accountSummary: Record<string, { debit: number; credit: number; balance: number }>;
  importJSON: (json: string) => void;
  exportJSON: () => string;
}
