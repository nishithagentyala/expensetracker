import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={sign === "-" ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}
          Rs.{transaction.amount}
        </span>
        <button className="delete">X</button>
      </li>
    </div>
  );
};

export default Transaction;
