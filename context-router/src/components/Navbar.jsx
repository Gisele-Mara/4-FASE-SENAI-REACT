import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/"> HOME </Link>
      <Link to="/contact"> CONTACT</Link>
      <Link to="/something"> SOMETHING </Link>
      <Link to="/final"> FINAL </Link>
    </nav>
  )
}

export default Navbar
