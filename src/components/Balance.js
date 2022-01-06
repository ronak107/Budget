import React from "react";
import { useContext } from "react/cjs/react.development";
import { Globalcontext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(Globalcontext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
};
export default Balance;
