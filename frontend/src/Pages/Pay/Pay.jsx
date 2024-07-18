import React from 'react'
import { useContext } from 'react'
import './Pay.css'
import { StoreContext } from '../../Context/StoreContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { assets } from '../../asset/assets'
import { useState } from 'react'

const Pay = () => {
    const {cartItem,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();
  const [pay,setPay]=useState(false);
  console.log(pay);
  return (
    <div className='container'>
        <div className="cart-totals">
            <h2>Food Products</h2>
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(
              <div>
              <div className="cart-items-title cart-items-item">
                <img src={assets.parcel_icon} alt="" />
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price*cartItem[item._id]}</p>
              </div>
              </div>
            )
          }
        })}
          <div>
            <hr />
            <h2>Grand Total</h2>
            <br />
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
        </div>
        <div className="card-details">
            <h2>PAYMENT</h2>
            <div className="img">
            <img onClick={()=>setPay(false)} src={assets.card} alt=""/>
            <img onClick={()=>setPay(true)} src={assets.gpay} alt="" />
            </div>
            {pay===false?<div className="card"><div className="card-number">

                <p>Card Number</p>
                <br />
                <input type="text" name="card-no" id="cardno" placeholder='0000 0000 0000 0000' />
            </div>
            <div className="cardholder">
                <p>Card Holder name</p>
                <br />
                <input type="text" name="name" id="name" placeholder='Card Holder Name'/>
            </div>
            <div className="expiry-cvc">
                <div className="expiry-no">
                    <p>Expiry</p>
                    <br />
                    <input type="text" placeholder='MM/YY' />
                </div>
                <div className="cvc">
                    <p>CVC</p>
                    <br />
                    <input type="text" placeholder='cvc' />
                </div>
            </div>
            <br />
            <button className='btn'>Pay</button>
            <br />
            </div>:<div className='qr'><img src={assets.qr} alt="" /></div>}
            
        </div>
    </div>
  )
}

export default Pay