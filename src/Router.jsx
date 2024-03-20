// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Add Link import
// import Home from 'src/home.jsx'
// import About from './about';
// import Contact from './contact';
// import BudgetApp from './AddTransaction';


const App = () => {
  return (
    <Router>
      <div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* <BudgetApp/> */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>


  );
};

export default App;