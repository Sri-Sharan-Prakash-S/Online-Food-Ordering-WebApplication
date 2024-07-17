import React, { useContext } from 'react'
import './Payment.css'
import { food_list } from '../../asset/assets'
import { assets } from '../../asset/assets'
import { StoreContext } from '../../Context/StoreContext'
import { Navigate, useNavigate } from 'react-router-dom'
const Cart = () => {
  const {cartItem,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
        <h1>Track Your Order</h1>
        <br />
        <hr />
        <br />
        <br />
        <br />
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Status</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(
              <div>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>                
                <p className='status'><img src={assets.parcel_icon} alt="" />Food Processing</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
      </div>
      
    </div>
  )
}

export default Cart