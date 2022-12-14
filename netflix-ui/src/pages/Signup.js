import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import "./style.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import Logo from "../components/Logo.png"
import { Button, Input, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Signup() {
  const navigate  = useNavigate()
  const [isSignUp, setisSignUp] = useState(false)
  const [input, setinput] = useState({
    email: "",
    password: "",
  })
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/user/register", {
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
    <div className='signup'>
      <BackgroundImage></BackgroundImage>
 
       <div className='heading'>
           <div className='logo'>
            <img src={Logo}></img>
            </div>
            <div>
            <Button LinkComponent={Link} to="/login" variant='contained' sx={{
              backgroundColor:"red",
              width:'5vw',
              height:'3vh',
              marginTop:1
            }} >Login</Button>
           </div>
       </div>  
       <div className='writings'>
           
              <h1>Unlimited movies,TV </h1>
              <h1>shows and more.</h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <h4>
                Ready to watch? Enter your email to create or restart membership.
              </h4>
       </div>
          
             
            
       
       <form className='signupForm' onSubmit={handleSubmit}>
       <div className='input'>    
            <TextField required id="email" value={input.email} name='email' onChange={handleChange} type={'email'} placeholder='email' sx={{width:400,backgroundColor:"white"}}/>
            { isSignUp ? <TextField  required id="password" value={input.password} name='password' onChange={handleChange}   type={'password'} placeholder='password' sx={{width:400,backgroundColor:"white"}}/>
            : <Button onClick={()=>{setisSignUp(true)}} variant='contained' sx={{
              backgroundColor: "red",
             width:200,
             padding: 2
            }}>Get Started</Button>}
            </div> 

           <div className='button'>
           <Button  sx={{backgroundColor:'red'}}  type='submit' variant='contained'>Submit</Button>
           </div>

      </form>
     
     
    </div>
      
   
  )
}

export default Signup