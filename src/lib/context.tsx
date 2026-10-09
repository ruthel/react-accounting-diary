import React, { useState, useCallback, useEffect, useRef } from 'react';
import { IDataItem, ILabels, defaultLabels, SortField, SortOrder, ViewMode, ReconciliationFilter, generateId } from '../types/common';

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
  reconciliationFilter?: ReconciliationFilter;
  templateItem?: Partial<IDataItem>;
}

interface IGlobalContext {
  state: IGlobalState;
  labels: Required<ILabels>;
  pageSize?: number;
  undo: () => void;
  redo: () => void;
  setReconciled: (item: IDataItem, reconciled: boolean) => Promise<boolean>;
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
  const pendingChange = useRef<IDataItem[] | undefined>(undefined);

  const [state, setState] = useState<IGlobalState>(() => {
    const data = (initialData || []).map(item => ({ ...item, id: item.id || generateId() }));
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
      reconciliationFilter: 'all',
      templateItem: undefined,
    };
  });
  const latestState = useRef(state);
  latestState.current = state;

  // Notify after commit: controlled parents must not be updated during our render.
  useEffect(() => {
    if (pendingChange.current === state.data) {
      pendingChange.current = undefined;
      onChange?.(state.data || []);
    }
  }, [state.data, onChange]);

  // Sync internal state when parent changes props.data (controlled mode)
  useEffect(() => {
    if (initialData !== undefined) {
      setState(prev => {
        // Only sync if data actually differs (avoid infinite loops)
        if (prev.data === initialData) return prev;
        if (JSON.stringify(prev.data) === JSON.stringify(initialData)) return prev;
        const data = initialData.map(item => ({ ...item, id: item.id || generateId() }));
        return { ...prev, data, history: [data], doIndex: 0, currentPage: 1 };
      });
    }
  }, [initialData]);

  const undo = useCallback(() => {
    setState((prevState) => {
      if (prevState.doIndex > 0) {
        const newData = prevState.history[prevState.doIndex - 1];
        pendingChange.current = newData;
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
        pendingChange.current = newData;
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
        pendingChange.current = newData;
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
    setReconciled: async (item, reconciled) => {
      const index = (latestState.current.data || []).indexOf(item);
      if (index < 0) return false;
      const newItem = { ...item, reconciled };
      if (onBeforeEdit && !(await onBeforeEdit(item, newItem))) return false;
      // An asynchronous validator must not overwrite intervening edits or deletion.
      const currentData = latestState.current.data || [];
      const currentIndex = currentData.indexOf(item);
      if (currentIndex < 0) return false;
      const newData = [...currentData];
      newData[currentIndex] = newItem;
      onEdit?.(item, newItem);
      updateState({ data: newData });
      return true;
    },
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
