import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div className="inc">
        <h3>INCOME</h3>
        <p>+Rs.{income}</p>
      </div>
      <div className="exp">
        <h3>EXPENSE</h3>
        <p>-Rs.{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
