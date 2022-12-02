import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import "./style.css"
import axios from 'axios'
import Logo from "../components/Logo.png"
import { Button, Input, TextField, Typography ,InputLabel} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';function Login() {
  const navigate  = useNavigate()
  const [isSignUp, setisSignUp] = useState(false)
  const [input, setinput] = useState({
    email: "",
    password: "",
  })
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/user/login", {
      email:String( input.email),
      password: String(input.password)
    })
    
   .catch((err) => {
      console.log(err)
    }
   
    )
   
    const data = res.data
    return data
    
   
  }

  const handleChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequest()
    .then((data)=>console.log(data.user))
    .then(()=>navigate("/netflix"))
    
  }


  return (
    <div className='login'>
      <BackgroundImage></BackgroundImage>
 
       <div className='heading'>
           <div className='logo'>
            <img src={Logo}></img>
            </div>
            <div>
            <Button LinkComponent={Link} to="/" variant='contained' sx={{
              backgroundColor:"red",
              fontWeight:"bold",
              width:30,
              height:30,
              marginTop:1
            }}>SignUp</Button>
            </div>
        </div>
      <form className='form' onSubmit={handleSubmit}>
     
        <Typography variant='h3' sx={{color:'white',
      fontWeight:800,
      
      }}>Login</Typography>
        <TextField onChange={handleChange} value={input.title} placeholder="Email"   name='email' sx={{
          backgroundColor:"white",
        
          width:'20vw'
        
        
        }}/>
        <TextField onChange={handleChange} value={input.description} placeholder='password'  name='password'sx={{
           backgroundColor:"white",
          width:'20vw'
         
        }}/>
     
        <Button type='submit' variant="contained" sx={{
          backgroundColor:"red",
        }}>Submit</Button>
     
    </form>
       </div>  
      
  )
}

export default Login