"use client";

import React, { useReducer, useContext, createContext, useMemo } from "react";
import { initialGlobalStateType, initialGlobalState } from "./initialState";
import { reducer } from "./reducer";

export const GlobalStateContext = createContext<{
  state: initialGlobalStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialGlobalState,
  dispatch: () => {},
});

export const GlobalStateProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialGlobalState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
