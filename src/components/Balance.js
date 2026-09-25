import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0)
    .toFixed(2);

  return (
    <div>
      <h2>Your Balance</h2>
      <h3 id="balance">Rs.{total}</h3>
    </div>
  );
};

export default Balance;
