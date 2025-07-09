import React, { useState, useCallback } from 'react';

import { IDataItem } from '../types/common';

interface IGlobalState {
  data?: IDataItem[];
  doIndex: number;
  openSb: boolean;
  messageSb: string;
  history: IDataItem[][];
  severitySb: 'success' | 'error' | 'warning' | 'info';
}

interface IGlobalContext {
  state: IGlobalState;
  undo: () => void;
  redo: () => void;
  updateState: (e: Partial<IGlobalState> | { data: IDataItem[] }) => void;
}

const Context = React.createContext<IGlobalContext | undefined>(undefined);

const GlobalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<IGlobalState>({
    data: [],
    doIndex: 1,
    openSb: false,
    messageSb: '',
    history: [[]],
    severitySb: 'success',
  });

  const undo = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      data: prevState.history[prevState.doIndex - 1],
      doIndex: prevState.doIndex - 1,
    }));
  }, []);

  const redo = useCallback(() => {
    setState((prevState) => {
      let newIndex = prevState.doIndex + 1;
      if (newIndex < prevState.history.length) {
        return {
          ...prevState,
          data: prevState.history[newIndex],
          doIndex: newIndex,
        };
      }
      return prevState; // Return previous state for no change
    });
  }, []);

  const updateState = useCallback((e: Partial<IGlobalState> | { data: IDataItem[] }) => {
    if ('data' in e && !('doIndex' in e)) {
      setState((prevState) => {
        let history = [...prevState.history].slice(
          0,
          prevState.doIndex + 1
        );
        return {
          ...prevState,
          history: [...history, e.data as IDataItem[]],
          doIndex: history.length,
        };
      });
      setState((prevState) => ({ ...prevState, ...e }));
    } else {
      setState((prevState) => ({ ...prevState, ...e }));
    }
  }, []);

  const contextValue = {
    state,
    undo,
    redo,
    updateState,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export { GlobalProvider, Context as GlobalContext };