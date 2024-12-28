import React from 'react'
import {assets} from "../assets/assets"

const Result = () => {
  return (
    <div className="flex justify-center mb-44 mt-14">
      <div className="flex w-[67%] flex-col bg-white p-6 rounded-sm">
         <div className="flex items-center justify-center mb-4">
            <label><p className="font-bold pb-1">Original</p><img className="rounded-lg" src={assets.image_w_bg}/></label>
            <label><p className="font-bold pb-1">Background Removed</p><img className="rounded-lg" src={assets.image_wo_bg}/></label>
         </div>
      <div className="flex items-center justify-end">
        <input className="hidden"   type="file" name="file" id="file" />
        <label htmlFor="file" className="bg-white px-6 py-1 text-sm rounded-2xl border-2 border-fuchsia-400 mr-1">Try another image</label>
        <a className="p-1 px-10 bg-gradient-to-r from-blue-700 to-fuchsia-500 rounded-2xl text-end" href="#" download="bg-result">Download</a>
      </div>
      </div>
    </div>
  )
}

export default Result