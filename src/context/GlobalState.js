import React, { createContext, useReducer,useMemo } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
const value = useMemo(
  () => ({
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  }),
  [state.transactions]
);


  return (
    <GlobalContext.Provider
      value={value}
    >
      {children}
    </GlobalContext.Provider>
  );
};
