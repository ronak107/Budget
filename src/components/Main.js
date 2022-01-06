import React from "react";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransitionList from "./TransactionList";
import { GlobalProvider } from ".././context/GlobalState";
import AddTransaction from "./AddTransaction";
import Expense from "./Expense";

const Main = () => {
  return (
    <div>
      <div className="container">
        <GlobalProvider>
          {" "}
          <div className="container">
            <Balance />
            <IncomeExpense />
            <Expense />
            <TransitionList />
            <AddTransaction />
          </div>
        </GlobalProvider>
      </div>
    </div>
  );
};
export default Main;
