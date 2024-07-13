import React, { useState } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
  const [category,setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home