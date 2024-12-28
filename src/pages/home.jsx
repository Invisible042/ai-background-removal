import React from 'react'
import Navbar from "../components/navbar"
import Header from "../components/header"
import Instruction from "../components/instruction"
import Testimonials from '../components/testimonials'
import Upload from "../components/upload"
import Bgslider from "../components/bgslider"

const Home = () => {
  return (
    <div className="w-full">
      <Header/>
      <Instruction/>
      <Bgslider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home