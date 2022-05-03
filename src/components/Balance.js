import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h2>Your Balance</h2>
      <h3 id="balance">Rs.{total}</h3>
    </div>
  );
};

export default Balance;
