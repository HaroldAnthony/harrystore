import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='navbar_div'>
        <div>
          <input type='text' placeholder='Search here' />
        </div>
      </div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/loginform">Login</Link>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar