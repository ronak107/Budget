import React, { useState, useContext } from "react";
import { Globalcontext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [option, setOption] = useState("income");

  const options = [
    { label: "Income", value: "income" },
    { label: "Expense", value: "expense" },
  ];

  const { addTransaction } = useContext(Globalcontext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpenseTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -Math.abs(amount),
      option,
    };
    // addTransaction(newExpenseAmount);

    const newIncomeTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount),
      option,
    };
    // addTransaction(newIncomeAmount);

    if (option === "expense") {
      return addTransaction(newExpenseTransaction);
    } else if (option === "income") {
      return addTransaction(newIncomeTransaction);
    }
  };

  // const newTransaction = {
  //   id: Math.floor(Math.random() * 100000000),
  //   text,
  //   amount: +amount,
  // };
  // addTransaction(newTransaction);
  // };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            min="1"
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
export default AddTransaction;
