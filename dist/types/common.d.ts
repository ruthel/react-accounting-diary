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
}
export declare const defaultLabels: Required<ILabels>;
export type SortField = 'date' | 'account' | 'amount';
export type SortOrder = 'asc' | 'desc';
