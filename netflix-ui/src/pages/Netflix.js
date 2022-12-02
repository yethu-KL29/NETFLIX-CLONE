import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { Button, Input, TextField, Typography ,InputLabel, Tab, Toolbar} from '@mui/material'
import './style.css'
import Logo from "../components/Logo.png"

function Netflix() {
  return (
    <div className='netflix'>
      {/* <BackgroundImage></BackgroundImage> */}
          <div className='heading'>
           <div className='logo'>
            <img src={Logo}></img>
           </div>
           <div className='nav'>
            <Toolbar>
            <Tab>Home</Tab>
            <Tab>Home</Tab>
            <Tab>Home</Tab>
            <Tab>Home</Tab>
            </Toolbar>
           </div>
       </div>  
    </div>
  )
}

export default Netflix