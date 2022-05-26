import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const editTransaction = () => {
    document.querySelector(".text").value = transaction.text;
    document.querySelector(".amount").value = transaction.amount;
  };
  return (
    <div>
      <li className={sign === "-" ? "minus" : "plus"}>
        <span>Rs.{transaction.amount}</span>
        <h4>{transaction.text}</h4>
        <button
          className="delete"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
        <button
          className="edit"
          onClick={() => editTransaction(transaction.id)}
        >
          <FaEdit />
        </button>
      </li>
    </div>
  );
};

export default Transaction;
