import React from 'react'
import {assets} from "../assets/assets"
import { Link } from "react-router-dom"
import axios from "axios"



function Navbar(){


  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
        <Link to="/"> <img className="w-32 sm:w-44"src={assets.logo}/></Link>
        <Link to="/signup"  className=" text-white bg-zinc-800 flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full" >Get started
        <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="arrow_icon"/></Link>
    </nav>
  )
  }

export default Navbar