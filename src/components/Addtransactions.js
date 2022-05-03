import React, { useState } from "react";
import "./TransactionList.css";
const Addtransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div className="addtrans">
      <h2>Add new transaction</h2>
      <div className="form-control">
        <label htmlFor="Text">Text</label>
        <input
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
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="enter Amount..."
        />
      </div>
      <button>Add Transaction</button>
    </div>
  );
};

export default Addtransactions;
