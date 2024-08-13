import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <span className="navbar-brand">My Website</span>
        <div className="navbar-buttons">
            <button className="nav-button">Home</button>
            <button className="nav-button">Contact</button>
        </div>
    </nav>

    </>
  )
}

export default Navbar