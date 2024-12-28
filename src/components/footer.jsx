import React from 'react'
import {assets} from "../assets/assets"

const Footer = () => {
  return (
    <div className="w-[100%] flex justify-between px-4 sm:flex sm:mr-2 sm:items-center sm:justify-between sm:px-28 lg:px-48">
      <div className="sm:flex items-center space-x-4">
      <img className="border-r-2 border-slate-400 pr-2 w-12" src={assets.logo_icon}/>
      <p className="hidden sm:block">All right reserved. Copyright @bg removal</p>
      </div>
      <div className="flex w-10 ">
      <img src={assets.facebook_icon}/>
      <img src={assets.twitter_icon}/>
      <img src={assets.google_plus_icon}/>
      </div>
    </div>
  )
}

export default Footer