import React from 'react'
import {assets} from "../assets/assets"
import {plans} from "../assets/assets"

const Buycredit = () => {
  return (
    <div>
      <h1></h1>
      <h2></h2>
      <div className="flex justify-between items-center p-8">
        {plans.map((data, index)=>{
          const {id,price,credits,desc} = data
          return(
            <div>
              <img src={assets.logo_icon}  />
              <h1>{id}</h1>
              <h2>{desc}</h2>
              <h1>{price}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Buycredit