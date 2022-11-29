import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import "./style.css"
import Logo from "../components/Logo.png"
import { Button, Input, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
function Signup() {
  const [isSignUp, setisSignUp] = useState(false)
  return (
    <div className='signup'>
      <BackgroundImage></BackgroundImage>
 
       <div className='heading'>
           <div className='logo'>
            <img src={Logo}></img>
            <Button variant='contained' sx={{
              backgroundColor:"red",
              width:30,
              height:30,
              marginTop:1
            }}>Login</Button>
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
          
             
            
      <div className='input'>      
       <form className='form'>
                 
            <TextField name='email' type={'email'} placeholder='email' sx={{width:400,backgroundColor:"white"}}/>
            { isSignUp ? <TextField name='password'    type={'password'} placeholder='password' sx={{width:400,backgroundColor:"white"}}/>
            :  <Button onClick={()=>{setisSignUp(true)}} type='submit' variant='contained' sx={{
              backgroundColor: "red",
             width:200,
             padding: 2
            }}>Get Started</Button>}
           
                 
      </form>
      <div className='button'>
           <Button sx={{backgroundColor:'red'}} variant='contained'>Submit</Button>
      </div>
      </div> 
    </div>
      
   
  )
}

export default Signup