import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/home"
import Result from "./pages/result"
import Buycredit from "./pages/buycredit"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import {Link} from "react-router-dom"

const App = () => {
  return (
    <div className=" w-full h-screen">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/buycredit" element={<Buycredit/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App