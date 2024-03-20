import React, { useState, useEffect } from "react";

export const CreateAccountForm = (props) => {
    const [nameError, setNameError] = useState(false);
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [initialBalance, setInitialBalance] = useState(0);
    const [createdAccount, setCreatedAccount] = useState(null);
    const [allAccounts, setAllAccounts] = useState([]);

    useEffect(() => {
        const accounts = JSON.parse(localStorage.getItem('allAccounts')) || [];
        setAllAccounts(accounts);
    }, []);

    const validateName = (name) => {
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(name);
    }

    const createAccount = () => {
        if (!validateName(firstName) || !validateName(lastName)) {
            setNameError(true);
            return;
        }

        const uniqueId = crypto.randomUUID();
        console.log(`Account created for ${userName} ${firstName} ${lastName} with email ${email}, password ${password}, and initial balance ${initialBalance}`);
        const accountData = {
            id: uniqueId,
            userName,
            firstName,
            lastName,
            email,
            password,
            balance: initialBalance
        };
        const updatedAccounts = [...allAccounts, accountData];
        localStorage.setItem('allAccounts', JSON.stringify(updatedAccounts));
        setAllAccounts(updatedAccounts);
        setCreatedAccount(accountData);
        return accountData;
    }

    const deleteAccount = (email) => {
        const updatedAccounts = allAccounts.filter(account => account.email !== email);
        localStorage.setItem('allAccounts', JSON.stringify(updatedAccounts));
        setAllAccounts(updatedAccounts);
        setCreatedAccount(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        const account = createAccount();
        console.log(account);
    }

    return (
        <div>
            <h1>Create here!</h1>
            <div className="form">
                <form className="createAccountForm" onSubmit={handleSubmit}>
                    <label className="label" htmlFor="userName">Username</label>
                    <input className="input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" id="userName" placeholder="Username" required/>
                    <label className="label" htmlFor="firstName">First Name</label>
                    <input className="input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstName" placeholder="First Name" required/>
                    {nameError && <p className="error">First name should only contain letters</p>}
                    <label className="label" htmlFor="lastName">Last Name</label>
                    <input className="input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastName" placeholder="Last Name" required/>
                    {nameError && <p className="error">Last Name should only contain letters</p>}
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@example.com" id="email" required/>
                    <label className="label" htmlFor="password">Password</label>
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" id="password" required/>
                    <label className="label" htmlFor="initialBalance">Initial Balance</label>
                    <input className="input" type="number" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder="0.00 PHP" id="initialBalance" required/>
                    <button className="button" type="submit">Create Account</button>
                </form>
            </div>
            {createdAccount && (
                <div className="latestHistory">
                    <h2>Latest Account:</h2>
                    <p>ID: {createdAccount.id}</p>
                    <p>Username: {createdAccount.userName}</p>
                    <p>Name: {createdAccount.firstName} {createdAccount.lastName}</p>
                    <p>Email: {createdAccount.email}</p>
                    <p>Initial Balance: {createdAccount.balance}</p>
                    <button onClick={() => deleteAccount(createdAccount.email)}>Delete Account</button>
                </div>
            )}
            <div className="accountCreated">
                <h2>All Accounts:</h2>
                {allAccounts.map((account, index) => (
                    <div key={index}>
                        <p>ID: {account.id}</p>
                        <p>Username: {account.userName}</p>
                        <p>Name: {account.firstName} {account.lastName}</p>
                        <p>Email: {account.email}</p>
                        <p>Initial Balance: {account.balance}</p>
                        <button onClick={() => deleteAccount(account.email)}>Delete Account</button>
                    </div>
                ))}
            </div>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    );
}

export default CreateAccountForm;




