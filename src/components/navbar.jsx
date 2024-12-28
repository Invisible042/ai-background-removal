import React from 'react'
import {assets} from "../assets/assets"
import { Link } from "react-router-dom"


function Navbar(){
const handleClick = async (e)=>{
  e.preventDefault()
  try{
    await navigateToResultPage();
  }catch{
    console.error("could not find result page")
  }
}
const navigateToResultPage = ()=>{
  window.location.href = "/result"
}

  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
        <Link to="/home"> <img className="w-32 sm:w-44"src={assets.logo}/></Link>
        <button type="button" onClick={handleClick} className=" text-white bg-zinc-800 flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full" >Get started
        <img className="wi-3 sm:w-4" src={assets.arrow_icon} alt="arrow_icon"/></button>
    </nav>
  )
  }

export default Navbar