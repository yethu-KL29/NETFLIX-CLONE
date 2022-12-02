import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { Button, Input, TextField, Typography ,InputLabel, Tab,Tabs, Toolbar, AppBar} from '@mui/material'
import "./style.css"
import Logo from "../components/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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
            <Tabs sx={{backgroundColor:"inherit"}}>
            <Tab sx={{
              color:"white",
            }} label="Home"/>
            <Tab  sx={{
              color:"white",
            }} label="Diarys"/>
            <Tab  sx={{
              color:"white",
            }} label="Add"/>
            <Tab  sx={{
              color:"white",
            }} label="Profile"/>
            </Tabs>
            </Toolbar>

       
           </div>
       </div>  
    </div>
  )
}

export default Netflix