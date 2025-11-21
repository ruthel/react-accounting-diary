import { default as React } from 'react';
import { IDataItem } from '../types/common';
interface IGlobalState {
    data?: IDataItem[];
    doIndex: number;
    openSb: boolean;
    messageSb: string;
    history: IDataItem[][];
    severitySb: 'success' | 'error' | 'warning' | 'info';
    editingTransaction?: IDataItem;
    searchTerm?: string;
    dateFilter?: {
        start?: string;
        end?: string;
    };
}
interface IGlobalContext {
    state: IGlobalState;
    undo: () => void;
    redo: () => void;
    updateState: (e: Partial<IGlobalState> | {
        data: IDataItem[];
    }) => void;
}
declare const Context: React.Context<IGlobalContext | undefined>;
declare const GlobalProvider: React.FC<React.PropsWithChildren>;
export { GlobalProvider, Context as GlobalContext };
