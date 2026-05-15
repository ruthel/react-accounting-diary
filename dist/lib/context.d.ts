import { default as React } from 'react';
import { IDataItem, ILabels, SortField, SortOrder, ViewMode } from '../types/common';
interface IGlobalState {
    data?: IDataItem[];
    doIndex: number;
    openSb: boolean;
    messageSb: string;
    history: IDataItem[][];
    severitySb: 'success' | 'error' | 'warning' | 'info';
    editingTransaction?: IDataItem;
    openAddDialogCount?: number;
    searchTerm?: string;
    dateFilter?: {
        start?: string;
        end?: string;
    };
    sortField?: SortField;
    sortOrder?: SortOrder;
    currentPage: number;
    viewMode: ViewMode;
    filterAccount?: string;
    filterCategory?: string;
    templateItem?: Partial<IDataItem>;
}
interface IGlobalContext {
    state: IGlobalState;
    labels: Required<ILabels>;
    pageSize?: number;
    undo: () => void;
    redo: () => void;
    updateState: (e: Partial<IGlobalState> | {
        data: IDataItem[];
    }) => void;
    onAdd?: (item: IDataItem) => void;
    onDelete?: (item: IDataItem) => void;
    onEdit?: (oldItem: IDataItem, newItem: IDataItem) => void;
    onChange?: (data: IDataItem[]) => void;
    onBeforeAdd?: (item: IDataItem) => boolean | Promise<boolean>;
    onBeforeEdit?: (oldItem: IDataItem, newItem: IDataItem) => boolean | Promise<boolean>;
    onBeforeDelete?: (item: IDataItem) => boolean | Promise<boolean>;
}
declare const Context: React.Context<IGlobalContext | undefined>;
interface IGlobalProviderProps extends React.PropsWithChildren {
    initialData?: IDataItem[];
    labels?: ILabels;
    pageSize?: number;
    onAdd?: (item: IDataItem) => void;
    onDelete?: (item: IDataItem) => void;
    onEdit?: (oldItem: IDataItem, newItem: IDataItem) => void;
    onChange?: (data: IDataItem[]) => void;
    onBeforeAdd?: (item: IDataItem) => boolean | Promise<boolean>;
    onBeforeEdit?: (oldItem: IDataItem, newItem: IDataItem) => boolean | Promise<boolean>;
    onBeforeDelete?: (item: IDataItem) => boolean | Promise<boolean>;
}
declare const GlobalProvider: React.FC<IGlobalProviderProps>;
export { GlobalProvider, Context as GlobalContext };
export type { IGlobalState, IGlobalContext };
