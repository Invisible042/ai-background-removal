import React from 'react'
import {assets} from "../assets/assets"

const Instruction = () => {
  return(
    <div className="w-full flex items-center flex-col my-24">
        <h1 className="text-center text-3xl font-bold mb-10">Steps to remove background<br/>in seconds</h1>
        <div className="flex items-center flex-col justify-center max-w-[90%] my-8 mx-9 space-y-[0.05rem] text-md sm:flex-row flex-wrap gap-4 lg:flex-wrap lg:max-w-[70%] xl:max-w-[70%]">
            <div className="flex shadow-lg space-x-3 min-h-36 items-center py-3 px-6 bg-white max-w-[22.5rem]">
                <img className="w-8 mb-8" src={assets.upload_icon} />
                <div><h1 class="text-black font-bold text-lg">Upload image</h1>
                <p>This is a demo text, will replace it later. This is a demo..</p></div>
            </div>
            <div className="flex shadow-lg min-h-36 space-x-3 items-center border-2 px-6 py-3 bg-white max-w-[22.5rem]">
                <img className="w-8 mb-8" src={assets.upload_icon} />
                <div>
                <h1 class="text-black font-bold text-lg">Remove background</h1>
                <p>This is a demo text, will replace it later. This is a demo..</p>
                </div>
            </div>
            <div className="flex shadow-lg min-h-36 space-x-3 items-center border-2 px-6 py-3 bg-white max-w-[22.5rem]">
                <img className="w-8 mb-8" src={assets.upload_icon}/>
                <div>
                    <h1 class="text-black font-bold text-lg">Download image</h1>
                    <p>This is a demo text, will replace it later. This is a demo..</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instruction
