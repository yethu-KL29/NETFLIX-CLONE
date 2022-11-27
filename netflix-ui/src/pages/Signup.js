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
           </div>
       </div>  
       <div className='writings'>
           
              <h1>Unlimited movies, TV shows and more.</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h6>
                Ready to watch? Enter your email to create or restart membership.
              </h6>
       </div>
            <div className='input'>
              <form>
              <Box className='form' bgcolor='white'>
                  <Typography  sx=
                  {{
                    fontSize:30,
                    backgroundColor:'blue',
                    fontWeight:900
                   }}>{isSignUp? "Login":"SignUp"}</Typography>
              
              { !isSignUp && 
                 <TextField name='name'    placeholder='name' sx={{width:400}}/>}
                  <TextField name='email'    type={'email'} placeholder='email' sx={{width:400}}/>
                  <TextField name='password'   type={'password'} placeholder='password' sx={{width:400}}/>
                  <Button type='submit' variant='contained' color='warning'>Submit</Button>
                  <Button  variant='outlined' onClick={()=>{setisSignUp(!isSignUp)}} >Change to {isSignUp? "SignUp":"Login"}</Button>
                
                </Box>
              </form>

             </div>
      
    </div>
  )
}

export default Signup