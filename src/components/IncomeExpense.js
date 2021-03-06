import React, { useContext } from "react";
import { Globalcontext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(Globalcontext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {income}
        </p>
      </div>
    </div>
  );
};
export default IncomeExpense;
