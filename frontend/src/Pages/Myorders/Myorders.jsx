import React,{useContext,useState} from 'react'
import './Myorders.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';
const Myorders = () => {
    const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);
    const fetchOrders=async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    }
  return (
    <div>Myorders</div>
  )
}

export default Myorders