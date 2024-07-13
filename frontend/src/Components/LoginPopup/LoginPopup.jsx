import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../asset/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currstate,setcurrstate]=useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Login"?<></>:<input type="text" Placeholder='Your Name' required/>}
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Your Password' required/>
            </div>
            <button>{currstate==="Sign Up"?"Create Account":"Login"}</button>
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