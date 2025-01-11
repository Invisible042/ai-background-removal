import React from "react"
import {useState} from "react"
import axios from "axios"

const Signup = ()=>{
    const [form , setForm] = useState({})

    const handleSubmit =async (e)=>{
        e.preventDefault()
        try{
        const response = await axios.post("http://localhost:5000/user/register",form, {
            "Content-Type":"application/json"
        })
        console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setForm((prev)=>({
            ...prev, [name]:value
        }))
    }
    return(
        <div className="flex justify-center mb-28 flex-col items-center p-6">
            <h1>Register an account</h1>
            <form onSubmit={handleSubmit} className="flex space-y-4 flex-col p-8" action="/user/register" method="POST">
                <label htmlFor="username">username: <input onChange={handleChange} type="text" name="username" id="username" /></label>
                <label htmlFor="email">email: <input onChange={handleChange} type="email" name="email" id="email"/></label>
                <label htmlFor="password">password: <input onChange={handleChange} type="password" name="password" id ="password" /></label>
                <button className="bg-black px-8 py-3 text-white rounded-full" type="submit">Create account</button>
            </form>
        </div>
    )
}
export default Signup