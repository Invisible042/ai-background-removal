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
      <Router basename="/ai-background-removal">
        <Navbar/>
        <Routes>
          <Route path="/ai-background-removal/" element={<Home/>} />
          <Route path="/ai-background-removal/buycredit" element={<Buycredit/>} />
          <Route path="/ai-background-removal/result" element={<Result/>} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  )
}

export default App