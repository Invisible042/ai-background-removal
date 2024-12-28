import React from 'react'
import {assets} from "../assets/assets"

const Testimonials = () => {
  return (
    <div className="flex justify-center flex-col items-center text-sm">
        <h1 className="text-center text-4xl mb-20 sm:mb-14 font-bold">Customer Testimonials</h1>
        <div  className="flex items-center max-w-[860px] flex-col sm:flex-row sm:w-[90%] gap-8 w-[80%]">
        <div className="border-2 space-y-1 w-full bg-white p-3 rounded-xl shadow-md hover:scale-105 transition-transform ease-in-out duration-500 ">
            <p className="text-4xl">''</p>
            <p>I've been using bg.removal for nearly two years,<br/> primarily for Instagram, and it has been incredibly user-friendly,<br/> making my work much easier.</p>
            <div className="flex space-x-1 space-y-3">
                <img className="h-9 rounded-full mt-3" src={assets.profile_img_1} alt="profile image" />
                <div className="pb-4">
                    <h2 className="font-bold">Richard Nelson</h2>
                    <h3>Web Developer</h3>
                </div>
            </div>
        </div>
        <div className="border-2 w-full space-y-1 bg-white p-3 rounded-xl  shadow-md hover:scale-105 transition-transform duration-500 ease-in-out ">
            <p className="text-4xl">''</p>
            <p>I've been using bg.removal for nearly two years,<br/> primarily for Instagram, and it has been incredibly user-friendly,<br/> making my work much easier.</p>
            <div className="flex space-x-1 space-y-3">
                <img className="mt-3 rounded-full h-9" src={assets.profile_img_2} alt="" />
                <div className="pb-4">
                    <h2 className="font-bold">Donald Jackman</h2>
                    <h3>UI DESIGNER</h3>
                </div>
            </div>
        </div>
        </div>
    </div>
   )
}
export default Testimonials