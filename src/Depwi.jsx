import React, { useState, useEffect } from "react";
import "./routes/Deposit_Withdraw_Styling/depwi.css";

function DepositWithdraw() {
  const local = JSON.parse(localStorage.getItem("allAccounts")) || [];

  const [accountId, setAccountId] = useState("");
  const [balanceInput, setBalanceInput] = useState(0);
  const [retrievedUsers, setRetrievedUsers] = useState(local);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions.reverse());
  }, []);

  const handleAccountIdInput = (e) => {
    setAccountId(e.target.value);
  };

  const handleAmountInput = (e) => {
    setBalanceInput(e.target.value);
  };

  const performDeposit = () => {
    const userIndex = retrievedUsers.findIndex(
      (user) => String(user.id) === String(accountId.trim())
    );

    if (userIndex !== -1) {
      const updatedUsers = [...retrievedUsers];
      const user = updatedUsers[userIndex];
      const oldBalance = user.balance;
      const newBalance = Number(oldBalance) + Number(balanceInput);
      updatedUsers[userIndex] = { ...user, balance: newBalance };

      const updatedAccountsJSON = JSON.stringify(updatedUsers);
      localStorage.setItem("allAccounts", updatedAccountsJSON);
      setRetrievedUsers(updatedUsers);
      setBalanceInput(0);
      setAccountId("");

      const newTransaction = {
        type: "Deposit",
        amount: balanceInput,
        oldBalance: oldBalance,
        newBalance: newBalance,
        timestamp: new Date().toLocaleString(),
        accountId: accountId,
      };
      setTransactions([newTransaction, ...transactions]);
      localStorage.setItem(
        "transactions",
        JSON.stringify([newTransaction, ...transactions])
      );
    }
  };

  const performWithdrawal = () => {
    const userIndex = retrievedUsers.findIndex(
      (user) => String(user.id) === String(accountId.trim())
    );

    if (userIndex !== -1 && retrievedUsers[userIndex].balance >= balanceInput) {
      const updatedUsers = [...retrievedUsers];
      const user = updatedUsers[userIndex];
      const oldBalance = user.balance;
      const newBalance = Number(oldBalance) - Number(balanceInput);
      updatedUsers[userIndex] = { ...user, balance: newBalance };

      const updatedAccountsJSON = JSON.stringify(updatedUsers);
      localStorage.setItem("allAccounts", updatedAccountsJSON);
      setRetrievedUsers(updatedUsers);
      setBalanceInput(0);
      setAccountId("");

      const newTransaction = {
        type: "Withdrawal",
        amount: balanceInput,
        oldBalance: oldBalance,
        newBalance: newBalance,
        timestamp: new Date().toLocaleString(),
        accountId: accountId,
      };
      setTransactions([newTransaction, ...transactions]);
      localStorage.setItem(
        "transactions",
        JSON.stringify([newTransaction, ...transactions])
      );
    }
  };

  const clearLog = () => {
    setTransactions([]);
    localStorage.removeItem("transactions");
  };

  return (
    <>
      <div className="body">
        <div className="main-content">
          <div className="act-box">
            <h2 className="action-heading">Deposit/Withdraw Funds</h2>
            <div className="action-container">
              <input
                type="text"
                placeholder="Enter account id"
                onChange={handleAccountIdInput}
                value={accountId}
              />
              <input
                type="number"
                placeholder="Enter amount"
                onChange={handleAmountInput}
                value={balanceInput}
              />
              <div className="action-buttons">
                <button onClick={performDeposit}>Deposit</button>
                <button onClick={performWithdrawal}>Withdraw</button>
                <button onClick={clearLog}>Clear Log</button>
              </div>
            </div>
          </div>
        </div>
        <div className="table-log">
          <h3>Actions Log:</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Old Balance</th>
                <th>New Balance</th>
                <th>Timestamp</th>
                <th>Account ID</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.oldBalance}</td>
                    <td>{transaction.newBalance}</td>
                    <td>{transaction.timestamp}</td>
                    <td>{transaction.accountId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DepositWithdraw;
