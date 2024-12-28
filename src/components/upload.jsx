import React from 'react'
import {assets} from "../assets/assets"

const Upload = () => {
  return (
    <div className="flex items-center flex-col mt-28 pb-44">
        <h1 className="text-3xl pb-16">See the magic. Try Now</h1>
        <input className="hidden" id="upload" />
        <label htmlFor="upload" className="flex space-x-2 text-transparent px-14 py-3 bg-gradient-to-r from-blue-700 to-fuchsia-500 items-center rounded-full hover:scale-105 transition-transform ease-in-out duration-300"><img className="h-5" src={assets.upload_btn_icon}/><span className="text-white">upload image</span></label>
    </div>
  )
}

export default Upload