import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

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
            dispatch({type:"LOGIN_SUCCESS", payload : credential });
            navigate("/");
        } catch (err) {
            dispatch({type : "LOGIN_FAILURE", payload : err.response.data});
        }
    }
  return (
    <div className='login'>
        <div className='lContainer'>
            <input className='linput' placeholder='username' type={'text'} id='username' onChange={handleChange}></input>
            <input className='linput' placeholder='password' type={'password'} id='password' onChange={handleChange}></input>
            <button disabled={loading} className='lButton' onClick={handleClick}>Login</button>
            {
                error && <div>
                    <span>{error.message}</span>
                </div>
            }
        </div>
      
    </div>
  )
}

export default Login
