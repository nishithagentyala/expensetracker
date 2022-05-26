import React, { useState, useContext } from "react";
import "./TransactionList.css";
import { GlobalContext } from "../context/GlobalState";
const Addtransactions = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div className="addtrans">
      <h2>Add new transaction</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="Text">Text</label>
          <input
            className="text"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="Amount">Amount</label>
          <input
            className="amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="enter Amount..."
          />
        </div>
        <button className="add">Add Transaction</button>
      </form>
    </div>
  );
};

export default Addtransactions;
