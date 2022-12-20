import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const handleAuth=()=>{
    navigate("/login")
  }

  const handleLogout = () =>{
    setOpenMenu(!openMenu);
    dispatch({type :"LOGOUT"});
    navigate("/");
  }

  return (
    <div className='navbar'>
      <div>
        <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
          <div className='logo'>
              booking.com
          </div>
        </Link>
       {user ? <div onClick={()=>setOpenMenu(!openMenu)} >
       <img className='userimg' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt=""/>
       
       </div> : ( <div className='navItems'>
            <button className='navButton'>Register</button>
            <button onClick={handleAuth} className='navButton'>Login</button>
        </div>)}

        {openMenu &&
                <div className='menu'>
                  <Link className='menuLink'>
                    <div className="menuItem">{user.username}</div>
                  </Link>
                  {user.username === "codenipun" && <Link className='menuLink'>
                    <div className="menuItem">ADMIN</div>
                  </Link>}
                  <Link className='menuLink'>
                    <div className="menuItem">Bookings</div>
                  </Link>
                  <Link onClick={handleLogout} className='menuLink'>
                    <div className="menuItem">Logout</div>
                  </Link>
                  <Link className='menuLink'>
                    <div  className="menuItem">Settings</div>
                  </Link>
                </div>
            }         
      </div>
    </div>
  )
}

export default Navbar
