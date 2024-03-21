import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
        <img className="logo" src="/src/assets/Fundy_logo.png" alt="logo" />
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/log-in">Log In</Link>
        </ul>
       
    </nav>
  )
}

export default NavBar