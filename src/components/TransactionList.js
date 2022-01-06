import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

const TransitionList = () => {
  const { transactions } = useContext(Globalcontext);
  console.log(transactions);
  const resetData = (e) => {
    
  };
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <button className="btn" onClick={resetData}>
        Clear
      </button>
    </div>
  );
};
export default TransitionList;
