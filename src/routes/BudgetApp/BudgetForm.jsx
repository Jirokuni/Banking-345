import React, { useState } from "react";
import { fetchData } from "./helpers";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import "./budget.css";

export function budgetLoader() {
  const userName = fetchData("Lindsay Joseph");
  return { userName };
}

function BudgetForm() {
  const { userName } = useLoaderData();
  const currentBudget = userName.balance;

  const [budget, setBudget] = useState(0);
  const [item, setItem] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const newTransaction = {
      item: item,
      amount: Number(budget),
      date: new Date().toISOString(),
    };

    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
 
    setItem("");
    setBudget(0);
  };

  const handleDelete = (index) => {
    console.log("test:", index);
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="budget-wrapper">
      <form className="budget-form" onSubmit={handleUpdate}>
        <h1 className="user-heading">Hello, {userName.firstName}!</h1>
        <h2 className="user-budget">Available Funds: ₱{currentBudget}</h2>
        <div>
          <input
            type="text"
            value={item}
            className="budget-input"
            placeholder="Funds for?"
            onChange={(e) => setItem(e.target.value)}
          />
          <input
            type="number"
            value={budget}
            className="budget-input"
            placeholder="Amount"
            onChange={(e) => setBudget(e.target.value)}
          />
          <button type="submit" className="btn budget-button">
            Add Funds
          </button>
        </div>
      </form>
      <div className="budget-outlet">
        <Outlet />
        <ul>
    {transactions.map((transact, index) => {
      return (
        <li className="budget-item" key={index}>
          <span>{transact.item}</span>
          <span>{transact.amount}</span>
          <span>{new Date(transact.date).toLocaleString()}</span>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      );
    })}
  </ul>
      </div>
      <div className="budget-links">
      </div>
    </div>
  );
}

export default BudgetForm;
