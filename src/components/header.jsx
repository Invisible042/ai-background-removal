import React from 'react'
import {assets} from "../assets/assets"

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20" >
        {console.log(assets)}
        <div className="ml-20" >
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">Remove <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">Background</span> from<br/> images for free</h1>
            <p className="my-6 text-[15px] text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever.</p>
            <div>
            <input className="hidden" type="file" name="image"id="upload1" hidden/>
            <label className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700" htmlFor="upload1">
                <img width={20} src={assets.upload_btn_icon} />
                <p className="text-white text-sm">Upload your image</p>
            </label>
            </div>
        </div>
        <div>
        <img className="w-70" src={assets.header_img}/>
        </div>
    </div>
  )
}

export default Header