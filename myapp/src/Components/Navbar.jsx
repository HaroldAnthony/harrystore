import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/loginform">Login</Link>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar