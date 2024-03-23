import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect hooks
import "./routes/Deposit_Withdraw_Styling/depwi.css"; // Importing CSS file for styling

function DepositWithdraw() {
  const local = JSON.parse(localStorage.getItem("allAccounts")) || []; // Retrieving accounts data from localStorage

  const [accountId, setAccountId] = useState(""); // State variable for account ID input field
  const [balanceInput, setBalanceInput] = useState(0); // State variable for amount input field
  const [retrievedUsers, setRetrievedUsers] = useState(local); // State variable for retrieved users
  //retrieve users from local storage ^
  const [transactions, setTransactions] = useState([]); // State variable for transactions log

  useEffect(() => {
    // Effect hook to load transactions from localStorage on component mount
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions.reverse());
  }, []);

  const handleAccountIdInput = (e) => {
    // Event handler for account ID input field
    setAccountId(e.target.value);
  };

  const handleAmountInput = (e) => {
    // Event handler for amount input field
    setBalanceInput(e.target.value);
  };

  const performDeposit = () => {
    // Function to perform deposit action
    const userIndex = retrievedUsers.findIndex(
      // Find index of user with provided account ID
        //takes in a user object as param | then this converts acound id to be a string
      (user) => String(user.id) === String(accountId.trim()) //remove spaces
    );

    //searching through the userIndex or created acounts
    if (userIndex !== -1) {
      // If user found      //spread operator used para maexpand retrievedUsers into a new array. Makinng a copy.
      const updatedUsers = [...retrievedUsers]; // Create a copy of retrieved users

              //this retrieve the user object at the specified userIndex from the updatedUsers array
      const user = updatedUsers[userIndex]; // Get the user object
      const oldBalance = user.balance; // Get the old balance
      const newBalance = Number(oldBalance) + Number(balanceInput); // Calculate new balance
      updatedUsers[userIndex] = { ...user, balance: newBalance }; // Update user's balance

      // Update accounts data in localStorage
      const updatedAccountsJSON = JSON.stringify(updatedUsers);
      localStorage.setItem("allAccounts", updatedAccountsJSON);
      setRetrievedUsers(updatedUsers); // Update state variable with updated users
      setBalanceInput(0); // Reset amount input field
      setAccountId(""); // Reset account ID input field

      // Log the transaction
      const newTransaction = {
        type: "Deposit",
        amount: balanceInput,
        oldBalance: oldBalance,
        newBalance: newBalance,
        timestamp: new Date().toLocaleString(),
        accountId: accountId,
      };
      setTransactions([newTransaction, ...transactions]); // Update transactions log
      localStorage.setItem(
        "transactions",
        JSON.stringify([newTransaction, ...transactions])
      );
    }
  };

  const performWithdrawal = () => {
    // Function to perform withdrawal action
    const userIndex = retrievedUsers.findIndex(
      // Find index of user with provided account ID
      (user) => String(user.id) === String(accountId.trim())
    );

    if (
      //checks if there are any users in the array
      //also checks on if im withdrawing an amount larger than the balance, it wont push through
      userIndex !== -1 &&
      retrievedUsers[userIndex].balance >= balanceInput
    ) {
      // If user found and has sufficient balance
      const updatedUsers = [...retrievedUsers]; // Create a copy of retrieved users
      const user = updatedUsers[userIndex]; // Get the user object
      const oldBalance = user.balance; // Get the old balance
      const newBalance = Number(oldBalance) - Number(balanceInput); // Calculate new balance
      updatedUsers[userIndex] = { ...user, balance: newBalance }; // Update user's balance

      // Update accounts data in localStorage
      const updatedAccountsJSON = JSON.stringify(updatedUsers);
      localStorage.setItem("allAccounts", updatedAccountsJSON);
      setRetrievedUsers(updatedUsers); // Update state variable with updated users
      setBalanceInput(0); // Reset amount input field
      setAccountId(""); // Reset account ID input field

      // Log the transaction
      const newTransaction = {
        type: "Withdrawal",
        amount: balanceInput,
        oldBalance: oldBalance,
        newBalance: newBalance,
        timestamp: new Date().toLocaleString(),
        accountId: accountId,
      };
      setTransactions([newTransaction, ...transactions]); // Update transactions log //pushes new transactions to the transactions array
      localStorage.setItem(
        "transactions",
        JSON.stringify([newTransaction, ...transactions])
      );
    }
  };

  const clearLog = () => {
    // Function to clear the transactions log
    setTransactions([]); // Clear transactions log
    localStorage.removeItem("transactions"); // Remove transactions data from localStorage
  };


  return (
    <>
      <div className="body">
        <div className="main-content">
          <div className="act-box">
            <h2 className="action-heading">Deposit/Withdraw Funds</h2>
            <div className="action-container">
              {/* Input fields for account ID and amount */}
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
              {/* Buttons for deposit, withdrawal, and log clearing */}
              <div className="action-buttons">
                <button onClick={performDeposit}>Deposit</button>
                <button onClick={performWithdrawal}>Withdraw</button>
                <button onClick={clearLog}>Clear Log</button>
              </div>
            </div>
          </div>
        </div>
        {/* Displaying transactions log */}
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
              {/* Mapping through transactions to render table rows */}
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
