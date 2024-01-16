
import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <div class="container">
      <div class="main">
        <div class="logo"><a href="#"><img src="images/Finsweet white logo 1.png" alt=""/></a></div>
      <div class="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog</a></li>
          <li><Link to="/contact" className="contact">Contact Us</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
