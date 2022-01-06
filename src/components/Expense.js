import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";

const Expense = () => {
  const { transactions } = useContext(Globalcontext);
  const amounts = transactions.map((transaction) => transaction.amount);

  
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
     
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {expense}
        </p>
      </div>
    </div>
  );
};
export default Expense;
