import React, { useState } from "react"
import { toast } from 'react-toastify'; // Added import for toast
// import { useNavigate } from "react-router-dom"; // Added import for useNavigate
export const Login = (props) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    // const history = useNavigate(); // Initialized useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        const allAccounts = JSON.parse(localStorage.getItem('allAccounts')) || [];
        const foundAccount = allAccounts.find(account => account.email === email && account.password === pass);
        if (foundAccount) {
            toast.success("Login successful"); 

        } else {
            toast.error("Invalid email or password");
        }
    }   

    const handleCreateAccount = () => {
        props.onFormSwitch('createAccount');
    }

    return(
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
    )
}