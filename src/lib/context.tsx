import React, { useState, useCallback } from 'react';
import { IDataItem, ILabels, defaultLabels, SortField, SortOrder, ViewMode } from '../types/common';

interface IGlobalState {
  data?: IDataItem[];
  doIndex: number;
  openSb: boolean;
  messageSb: string;
  history: IDataItem[][];
  severitySb: 'success' | 'error' | 'warning' | 'info';
  editingTransaction?: IDataItem;
  openAddDialog?: boolean;
  searchTerm?: string;
  dateFilter?: { start?: string; end?: string };
  sortField?: SortField;
  sortOrder?: SortOrder;
  currentPage: number;
  viewMode: ViewMode;
}

interface IGlobalContext {
  state: IGlobalState;
  labels: Required<ILabels>;
  pageSize?: number;
  undo: () => void;
  redo: () => void;
  updateState: (e: Partial<IGlobalState> | { data: IDataItem[] }) => void;
  onAdd?: (item: IDataItem) => void;
  onDelete?: (item: IDataItem) => void;
  onEdit?: (oldItem: IDataItem, newItem: IDataItem) => void;
  onChange?: (data: IDataItem[]) => void;
  onBeforeAdd?: (item: IDataItem) => boolean | Promise<boolean>;
  onBeforeEdit?: (oldItem: IDataItem, newItem: IDataItem) => boolean | Promise<boolean>;
  onBeforeDelete?: (item: IDataItem) => boolean | Promise<boolean>;
}

const Context = React.createContext<IGlobalContext | undefined>(undefined);

interface IGlobalProviderProps extends React.PropsWithChildren {
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

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children, labels, pageSize, onAdd, onDelete, onEdit, onChange, onBeforeAdd, onBeforeEdit, onBeforeDelete }) => {
  const mergedLabels = { ...defaultLabels, ...labels } as Required<ILabels>;

  const [state, setState] = useState<IGlobalState>({
    data: [],
    doIndex: 0,
    openSb: false,
    messageSb: '',
    history: [[]],
    severitySb: 'success',
    editingTransaction: undefined,
    openAddDialog: false,
    searchTerm: '',
    dateFilter: {},
    sortField: undefined,
    sortOrder: 'asc',
    currentPage: 1,
    viewMode: 'diary',
  });

  const undo = useCallback(() => {
    setState((prevState) => {
      if (prevState.doIndex > 0) {
        const newData = prevState.history[prevState.doIndex - 1];
        onChange?.(newData);
        return {
          ...prevState,
          data: newData,
          doIndex: prevState.doIndex - 1,
        };
      }
      return prevState;
    });
  }, [onChange]);

  const redo = useCallback(() => {
    setState((prevState) => {
      let newIndex = prevState.doIndex + 1;
      if (newIndex < prevState.history.length) {
        const newData = prevState.history[newIndex];
        onChange?.(newData);
        return {
          ...prevState,
          data: newData,
          doIndex: newIndex,
        };
      }
      return prevState;
    });
  }, [onChange]);

  const updateState = useCallback((e: Partial<IGlobalState> | { data: IDataItem[] }) => {
    setState((prevState) => {
      if ('data' in e && !('doIndex' in e)) {
        const newData = e.data as IDataItem[];
        const history = [...prevState.history].slice(0, prevState.doIndex + 1);
        const newHistory = [...history, newData];
        onChange?.(newData);
        return {
          ...prevState,
          ...e,
          data: newData,
          history: newHistory,
          doIndex: newHistory.length - 1,
        };
      }
      return { ...prevState, ...e };
    });
  }, [onChange]);

  const contextValue: IGlobalContext = {
    state,
    labels: mergedLabels,
    pageSize,
    undo,
    redo,
    updateState,
    onAdd,
    onDelete,
    onEdit,
    onChange,
    onBeforeAdd,
    onBeforeEdit,
    onBeforeDelete,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export { GlobalProvider, Context as GlobalContext };
export type { IGlobalState, IGlobalContext };
