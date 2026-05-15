import React, { useState, useCallback, useEffect, useRef } from 'react';
import { IDataItem, ILabels, defaultLabels, SortField, SortOrder, ViewMode } from '../types/common';

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
  dateFilter?: { start?: string; end?: string };
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

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children, initialData, labels, pageSize, onAdd, onDelete, onEdit, onChange, onBeforeAdd, onBeforeEdit, onBeforeDelete }) => {
  const mergedLabels = { ...defaultLabels, ...labels } as Required<ILabels>;
  const isExternalUpdate = useRef(false);

  const [state, setState] = useState<IGlobalState>(() => {
    const data = initialData || [];
    return {
      data,
      doIndex: 0,
      openSb: false,
      messageSb: '',
      history: [data],
      severitySb: 'success',
      editingTransaction: undefined,
      openAddDialogCount: 0,
      searchTerm: '',
      dateFilter: {},
      sortField: undefined,
      sortOrder: 'asc',
      currentPage: 1,
      viewMode: 'diary',
      filterAccount: undefined,
      filterCategory: undefined,
      templateItem: undefined,
    };
  });

  // Sync internal state when parent changes props.data (controlled mode)
  useEffect(() => {
    if (isExternalUpdate.current) {
      isExternalUpdate.current = false;
      return;
    }
    if (initialData !== undefined) {
      setState(prev => {
        // Only sync if data actually differs (avoid infinite loops)
        if (prev.data === initialData) return prev;
        if (JSON.stringify(prev.data) === JSON.stringify(initialData)) return prev;
        return { ...prev, data: initialData };
      });
    }
  }, [initialData]);

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
        isExternalUpdate.current = true;
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
