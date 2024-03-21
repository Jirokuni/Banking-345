// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Add Link import
// import Home from 'src/home.jsx'
// import About from './about';
// import Contact from './contact';
// import BudgetApp from './AddTransaction';


const App = () => {
  return (
      <nav className="navbar">
        <ul>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
          <Link to="/log-in" >Log-in</Link>
        </ul>
      </nav>
  );
};

export default App;