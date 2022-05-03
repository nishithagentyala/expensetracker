import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [
    {
      id: 1,
      text: "recharge",
      amount: -200,
    },
    {
      id: 2,
      text: "MOM salary",
      amount: +4000,
    },
    {
      id: 3,
      text: "electricity bill",
      amount: -450,
    },
  ],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
