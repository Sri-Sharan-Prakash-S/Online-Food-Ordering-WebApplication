import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../asset/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {
  const [menu,setmenu]=useState("Home");
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Login</button>
      </div>
    </div>
  )
}

export default Navbar