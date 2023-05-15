import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li> <Link> Home </Link></li>
        <li> <Link> About Us </Link></li>
        <li> <Link> Services </Link></li>
        <li> <Link> Offers </Link></li>
        <li> <Link> Book Services </Link></li>
        <li> <Link> Contact Us </Link></li>
      </ul>
    </nav>
    
  )
}

export default Navbar
