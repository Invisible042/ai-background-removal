import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/home"
import Result from "./pages/result"
import Buycredit from "./pages/buycredit"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Signup from "./pages/signup"
import {Link} from "react-router-dom"

const App = () => {
  return (
    <div className=" w-full h-screen">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/buycredit" element={<Buycredit/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/signup" element ={<Signup/>} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  )
}

export default App