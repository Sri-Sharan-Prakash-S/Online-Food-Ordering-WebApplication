import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../asset/assets'
import { useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {
    const{url,setToken}=useContext(StoreContext)
    const [currstate,setcurrstate]=useState("Login")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(event)=>{
        event.preventDefault()
        let newUrl=url;
        if(currstate==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }

        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    }
  return (
    <div className='login-popup'>
        <form className="login-popup-container" onSubmit={onLogin}>
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Login"?<></>:<input name='name' onChange={onChangeHandler} type="text" Placeholder='Your Name' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required/>
            </div>
            <button type='submit'>{currstate==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing i agree to the terms of use &privacy policy</p>
            </div>
            {currstate==="Login"?<p>Create a New Account? <span onClick={()=>setcurrstate("Sign Up")}>Click Here</span></p>
            :<p>Already Have an Account?<span onClick={()=>setcurrstate("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup