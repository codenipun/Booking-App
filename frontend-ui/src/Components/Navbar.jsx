import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div>
        <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
          <span>
              lamabooking
          </span>
        </Link>
       {user ? user.username : ( <div className='navItems'>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar
