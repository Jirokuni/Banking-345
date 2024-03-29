import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export const CreateAccountForm = (props) => {
  const [nameError, setNameError] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initialBalance, setInitialBalance] = useState(0);
  const [createdAccount, setCreatedAccount] = useState(null);
  const [allAccounts, setAllAccounts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("allAccounts")) || [];
    setAllAccounts(accounts);
  }, []);

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
  };

  const createAccount = () => {
    if (!validateName(firstName) || !validateName(lastName)) {
      setNameError(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (initialBalance < 0) {
      alert("Initial balance cannot be less than 0");
      return;
    }

    const uniqueId = crypto.randomUUID();
    console.log(
      `Account created for ${userName} ${firstName} ${lastName} with email ${email}, password ${password}, and initial balance ${initialBalance}`
    );
    const accountData = {
      id: uniqueId,
      userName,
      firstName,
      lastName,
      email,
      password,
      isAdmin: isAdmin,
      balance: initialBalance,
    };

    const updatedAccounts = [...allAccounts, accountData]; // Combine new account with existing accounts
    const updatedAccountsString = JSON.stringify(updatedAccounts);
    localStorage.setItem("allAccounts", updatedAccountsString); // Store all accounts in a single array
    setAllAccounts(updatedAccounts);
    setCreatedAccount(accountData);
    Swal.fire({
      icon: "success",
      title: "Account created successfully!",
    });
    return accountData;
  };

  const deleteAccount = (email) => {
    const updatedAccounts = allAccounts.filter(
      (account) => account.email !== email
    );
    const updatedAccountsString = JSON.stringify(updatedAccounts);
    localStorage.setItem("allAccounts", updatedAccountsString);
    setAllAccounts(updatedAccounts);
    setCreatedAccount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    const account = createAccount();
    console.log(account);
  };

  const saveDefaultLogin = () => {
    const defaultLogin = {
      id: "admin",
      userName: "admin",
      firstName: "Admin",
      lastName: "User",
      email: "admin@example.com",
      password: "admin123",
      balance: 1000,
      isAdmin: true,
    };
    localStorage.setItem("defaultLogin", JSON.stringify(defaultLogin));
  };

  return (
    <div className="form-box">
      <div className="form">
        <form className="createAccountForm" onSubmit={handleSubmit}>
        <h1>Account Creation</h1>
          <label className="label" htmlFor="userName">
            Username
          </label>
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
            id="userName"
            placeholder="Username"
            required
          />
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required
          />
          {nameError && (
            <p className="error">First name should only contain letters</p>
          )}
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
          {nameError && (
            <p className="error">Last Name should only contain letters</p>
          )}
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@example.com"
            id="email"
            required
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
            id="password"
            required
          />
          <label className="label" htmlFor="initialBalance">
            Initial Balance
          </label>
          <input
            className="input"
            type="number"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
            placeholder="0.00 PHP"
            id="initialBalance"
            required
          />
          {initialBalance < 0 && (
            <p className="error">Initial balance cannot be less than 0</p>
          )}
          <div className="admin-input-container">
            <label for="admin-checkbox" className="admin-label">
              Admin Account?
            </label>
            <input
              id="admin-checkbox"
              type="checkbox"
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>

          <button className="button" type="submit">
            Create Account
          </button>
        </form>
      </div>
      {/* <button onClick={saveDefaultLogin}>Save Default Login</button> */}
    </div>
  );
};

export default CreateAccountForm;
