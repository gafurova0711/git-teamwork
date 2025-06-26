import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <h1>Travel</h1>
        </div>
        <div className="links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Discover</li>
                <li>Place</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar