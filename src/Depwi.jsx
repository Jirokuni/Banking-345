import React, { useState, useEffect } from "react";

const Account = () => {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance) : 0;
  });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  const deposit = (amount) => {
    if (!isNaN(amount)) {
      const newBalance = balance + amount;
      setBalance(newBalance);
      localStorage.setItem("balance", newBalance.toString());

      const newTransaction = { type: "Deposit", amount: amount };
      setTransactions([...transactions, newTransaction]);
      localStorage.setItem(
        "transactions",
        JSON.stringify([...transactions, newTransaction])
      );
    }
  };

  const withdraw = (amount) => {
    if (!isNaN(amount) && balance >= amount) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      localStorage.setItem("balance", newBalance.toString());

      const newTransaction = { type: "Withdrawal", amount: amount };
      setTransactions([...transactions, newTransaction]);
      localStorage.setItem(
        "transactions",
        JSON.stringify([...transactions, newTransaction])
      );
    } else {
      alert("Invalid amount or insufficient funds");
    }
  };

  const clearTransactions = () => {
    setTransactions([]);
    localStorage.removeItem("transactions");
  };

  const resetBalance = () => {
    setBalance(0);
    localStorage.setItem("balance", "0");
  };

  return (
    <div>
      <div className="main-box">
        <div className="bal-box">
          <h2 className="balance">Account Balance: ₱ {balance}</h2>
        </div>
        <div className="transaction-box">
          <input type="number" id="amount" />
          <button
            onClick={() => {
              const amount = Number(document.getElementById("amount").value);
              if (isNaN(amount) || amount <= 0) {
                alert("Invalid Amount");
              } else {
                deposit(amount);
                document.getElementById("amount").value = "";
              }
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              const amount = Number(document.getElementById("amount").value);
              if (isNaN(amount) || amount <= 0) {
                alert("Invalid Amount");
              } else {
                withdraw(amount);
                document.getElementById("amount").value = "";
              }
            }}
          >
            Withdraw
          </button>
          <button onClick={resetBalance}>Reset Balance</button>
          <button onClick={clearTransactions}>Clear Transactions</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>₱{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
