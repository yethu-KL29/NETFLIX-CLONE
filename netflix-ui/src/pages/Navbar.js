import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { Button, Input, TextField, Typography ,InputLabel, Tab,Tabs, Toolbar, AppBar} from '@mui/material'
import "./style.css"
import Logo from "../components/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function Navbar() {
  return (
    <div className='netflix'>
    {/* <BackgroundImage></BackgroundImage> */}
        <div className='heading'>
      
         <div className='logo'>
          <img src={Logo}></img>
         </div>

         <div className='nav'>
          <Toolbar sx={{
            width:"100%"
          }}>
          <Tabs sx={{backgroundColor:"inherit"}}>
          <Tab sx={{
            color:"white",
            fontSize:'1.5vh',
          }} label="Home"/>
          <Tab  sx={{
            color:"white",
            fontSize:'1.5vh',
          }} label="Diarys"/>
          <Tab  sx={{
            color:"white",
            fontSize:'1.5vh'
          }} label="Add"/>
         
          </Tabs>
          </Toolbar>
        
         </div> 
         <div className='logout'>
            <PowerSettingsNewIcon sx={{
              color:"red",
           
            }}></PowerSettingsNewIcon>
      </div>   
     </div>
     
  </div>
  )
}

export default Navbar