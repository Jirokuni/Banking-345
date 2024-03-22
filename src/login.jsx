import React, { useState } from "react"
import NavBar from "./routes/NavBar"
import { useNavigate } from "react-router"

export const Login = (props) => {
    const allAccounts = JSON.parse(localStorage.getItem('allAccounts')) || [];

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
 
        const foundAccount = allAccounts.find(account => account.email === email && account.password === pass);
        const defaultLogin = JSON.parse(localStorage.getItem('defaultLogin'));
        if (foundAccount || (email === defaultLogin.email && pass === defaultLogin.password)) {
            alert("Login successful");
            localStorage.setItem('isLoggedin', true);
            localStorage.setItem('currentUser', email);
            navigate('/app');
        } else {
            alert("Account is not a Administrator");
        }
        
    }   

    const handleCreateAccount = () => {
        props.onFormSwitch('createAccount');
    }

    return(
        <>
        <NavBar />
        <div className="login">
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" />
            <button type="submit">Login</button>
        </form>
        <button onClick={handleCreateAccount}>Don't have an account? Register here.</button>
        </div>
        </>
    )
}