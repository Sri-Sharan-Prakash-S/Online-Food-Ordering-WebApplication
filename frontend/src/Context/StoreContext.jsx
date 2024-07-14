import { createContext, useEffect, useState } from "react";
import {food_list} from "../asset/assets"
export const StoreContext = createContext(null)
import axios from 'axios'

const StoreContextProvider=(props)=>{
    const url="http://localhost:4000";
    const[token,setToken]=useState("");
    const [food_list,setFoodList]=useState([]);
    const [cartItem,setCartItems]=useState({});

    const addToCart=(itemid)=>{
        if(!cartItem[itemid]){
            setCartItems((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removeFromCart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount+=itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }
    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }
    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue={
        food_list,
        cartItem,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider