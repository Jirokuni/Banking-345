import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src="/src/assets/Fundy_logo_white.png" alt="logo" />
      </Link>
  
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/FAQs">FAQs</Link>
            <Link to="/log-in">Log In</Link>
        </ul>
       
    </nav>
  )
}

export default NavBar