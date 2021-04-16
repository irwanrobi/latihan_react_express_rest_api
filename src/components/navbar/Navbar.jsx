import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="brand">ROBI</h1>

            <ul className="menu">
                <li className="menu_item">Home</li>
                <li className="menu_item">About</li>
                <li className="menu_item">Contact</li>
                <li className="menu_item">Gallery</li>
            </ul>
        </nav>
    )
}

export default Navbar
