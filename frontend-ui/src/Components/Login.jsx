import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import Footer from './Footer';
import Navbar from './Navbar';

const Login = () => {
    
    const [credential, setCredential] = useState({
        username : undefined,
        password : undefined
    });
    const navigate = useNavigate()
    const {user, loading, error, dispatch} = useContext(AuthContext);

    const handleChange = async (e)=>{
        setCredential((prev)=>({...prev, [e.target.id] : e.target.value})); 
    }
    const handleClick = async(e) =>{
        e.preventDefault();
        dispatch({type :"LOGIN_START"})
        

        try {
            const res = await axios.post("/auth/login", credential);
            dispatch({type:"LOGIN_SUCCESS", payload : res.data.details });
            navigate("/");
        } catch (err) {
            dispatch({type : "LOGIN_FAILURE", payload : err.response.data});
        }
    }
  return (
    <><Navbar/>
    <div className='login'>
        <div className='lContainer'>
            <h1>Sign in or create an account</h1>
            <label className='lLabel'>Username</label>
            <input className='linput' type={'text'} id='username' onChange={handleChange}></input>
            <label className='lLabel'>Password</label>
            <input className='linput' type={'password'} id='password' onChange={handleChange}></input>
            <button disabled={loading} className='lButton' onClick={handleClick}>Login</button>
            <span className='newUser'>New User? &nbsp; <a href='/register'> Sign Up</a></span>
            {
                error && <div>
                    <span>{error.message}</span>
                </div>
            }
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
