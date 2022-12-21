import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// import Navbar from './Navbar';
import '../login/login.scss'
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [credential, setCredential] = useState({
        username : undefined,
        password : undefined
    });
    const navigate = useNavigate()
    const {user, loading, error, dispatchL} = useContext(AuthContext);

    const handleChange = async (e)=>{
        setCredential((prev)=>({...prev, [e.target.id] : e.target.value})); 
    }
    const handleClick = async(e) =>{
        e.preventDefault();
        dispatchL({type :"LOGIN_START"})
        

        try {
            const res = await axios.post("https://bookingapp-backend.onrender.com/api/auth/login", credential);

            if(res.data.isAdmin){
              dispatchL({type:"LOGIN_SUCCESS", payload : res.data.details});
              navigate("/");
            }else{
              dispatchL({type : "LOGIN_FAILURE", payload : {message : "You are not allowed"}});
            }
        } catch (err) {
            dispatchL({type : "LOGIN_FAILURE", payload : err.response.data});
        }
    }
  return (
    <>
    {/* <Navbar/> */}
    <div className='login'>
        <div className='lContainer'>
            <h1>Sign in or create an account</h1>
            <label className='lLabel'>Username</label>
            <input className='linput' type={'text'} id='username' onChange={handleChange}></input>
            <label className='lLabel'>Password</label>
            <input className='linput' type={'password'} id='password' onChange={handleChange}></input>
            <button disabled={loading} className='lButton' onClick={handleClick}>Login</button>
            {
                error && <div>
                    <span>{error.message}</span>
                </div>
            }
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Login