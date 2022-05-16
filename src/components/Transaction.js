import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  localStorage.setItem(transaction.text, transaction.id);
  return (
    <div>
      <li className={sign === "-" ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}
          Rs.{transaction.amount}
        </span>
        <button
          className="delete"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Transaction;
