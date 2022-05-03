import React, { useContext } from "react";
import "./TransactionList.css";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transactionlist">
      <h2>History</h2>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
