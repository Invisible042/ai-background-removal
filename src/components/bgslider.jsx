import React from 'react'
import {assets} from "../assets/assets"
import {useState} from "react"
import {useEffect} from "react"

const Bgslider = () => {

    const [range, setRange] = useState(50)
  
    useEffect(()=>{
      console.log(range)
    },[range])



    const handleChange = (e)=>{
      console.log(e.target)
      setRange(e.target.value)
      
    }
  




  return (
    <div className="flex items-center justify-center flex-col my-32 mx-3 space-y-10 relative w-full">
        <h1 className="text-center text-2xl font-bold mb-6 sm:mb-13 lg:mb-24  lg:text-4xl">Remove Background With High<br/>Quality Image and Accuracy</h1>
        <div className="rounded-lg max-w-[785px] relative overflow-hidden">
            <img style={{clipPath:`inset(0 ${100.2 - range}% 0 0)`}} className="w-full" src={assets.image_w_bg} />
            <img style={{clipPath:`inset(0 0 0 ${range}%)`}} className=" absolute top-0" src={assets.image_wo_bg} />
        </div>
        <input className="absolute top-48 slider w-10" onChange={handleChange} type="range" name="slider" min={0} max={100} value={range}/>
    </div>
  )
}

export default Bgslider