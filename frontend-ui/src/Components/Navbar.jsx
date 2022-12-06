import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
          <span>
              lamabooking
          </span>
        </Link>
        <div className='navItems'>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
