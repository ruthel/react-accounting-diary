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
export declare const generateId: () => string;
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
}
export declare const defaultLabels: Required<ILabels>;
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
    getTotals: () => {
        debit: number;
        credit: number;
        balance: number;
        isBalanced: boolean;
    };
    getAccountSummary: () => Record<string, {
        debit: number;
        credit: number;
        balance: number;
    }>;
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
    totals: {
        debit: number;
        credit: number;
        balance: number;
        isBalanced: boolean;
    };
    accountSummary: Record<string, {
        debit: number;
        credit: number;
        balance: number;
    }>;
    importJSON: (json: string) => void;
    exportJSON: () => string;
}
