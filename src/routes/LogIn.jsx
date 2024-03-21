import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // Added import for useNavigate

export const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const history = useNavigate(); // Initialized useNavigate

  const handleSubmit = (e) => {
    // e.preventDefault();
    const allAccounts = JSON.parse(localStorage.getItem("allAccounts")) || [];
    const foundAccount = allAccounts.find(
      (account) => account.email === email && account.password === pass
    );
    if (foundAccount) {
      console.log("Login successful");
      localStorage.setItem('isLoggedIn', 'true')
      return <Navigate to="/app" />;
      // Perform actions after successful login
      history.push("/main"); // Redirect to main.jsx after successful login
    } else {
      console.log("Invalid email or password");
      return <Navigate to="/log-in" />
    }

  };

  const handleCreateAccount = () => {
    props.onFormSwitch("createAccount");
  };

  return (
    <>
   <NavBar />
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*******"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleCreateAccount}>
        Don't have an account? Register here.
      </button>
    </div>
    </>
  );
};
