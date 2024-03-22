import './App.css'
// App.jsx
import React, { useState } from "react"
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Add Link import
import Home from './home';
// import About from './about';
// import Contact from './contact';
// import { LogIn } from "./routes/LogIn.jsx";
// import { CreateAccountForm } from "./routes/createAccount"



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
        // <Router>
    //   <div>
    //   <nav className="navbar">
    //     <ul>
    //       <li><a href="/">Home</a></li>
    //       <li><a href="/about">About</a></li>
    //       <li><a href="/contact">Contact</a></li>
    //     </ul>
    //   </nav>
      
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      {
        currentForm === "login" ? <LogIn onFormSwitch={toggleForm}/> : <CreateAccountForm onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;