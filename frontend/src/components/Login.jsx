import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault(
            axios.post('http://localhost:3001/login',{email,password})

            .then(result=>{
                console.log(result)
                if(result.data==="success"){
                    navigate('/register')
                }
                
                
            })
        .catch(err=>console.log(err)))
    }
    return(

        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                />

            </div>
            <div>
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password"
                placeholder="Enter password" 
                name="password"
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
                <button type="submit" >
                    Login
                </button>
                </form>
               
        </div>
    )
}
export default Login 