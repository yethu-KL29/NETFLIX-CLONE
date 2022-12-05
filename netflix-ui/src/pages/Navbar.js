import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { Button, Input, TextField, Typography ,InputLabel, Tab,Tabs, Toolbar, AppBar, IconButton} from '@mui/material'
import "./style.css"
import Searchbar from './Searchbar'
import { useState } from 'react'
import Logo from "../components/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom'
function Navbar() { 
  const [color, setcolor] = useState(false)
  const [value, setvalue] = useState()
  const navigate = useNavigate()  
  const handleLogout = () => {

    navigate('/login')
  }
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  

  return (
    <div className='netflix'>
    <BackgroundImage></BackgroundImage>
        <div className={color? 'heading-bg':'heading'}>
      
        

         <div className='nav'>
         <div className='logo'>
          <img src={Logo}></img>
         </div>
          <Toolbar sx={{
            width:"100%"
          }}>
          <Tabs TabIndicatorProps={{style: {background:'red'}}} value={value} onChange={(e,val)=>{
             setvalue(val)
        }}  sx={{backgroundColor:"inherit"}}>
          <Tab sx={{
            color:"white",
            fontSize:'1.5vh',
          }} label="Home"/>
          <Tab  sx={{
            color:"white",
            fontSize:'1.5vh',
          }} label="TV Shows"/>
          <Tab  sx={{
            color:"white",
            fontSize:'1.5vh'
          }} label="Movies"/>
          <Tab  sx={{
            color:"white",
            fontSize:'1.5vh'
          }} label="My List"/>
         
          </Tabs>
          </Toolbar>
        
         </div> 
         <div className='logout'>
             <Searchbar></Searchbar>
            <IconButton onClick={handleLogout} sx={{color:'red',width:'3vw'}}>
            <PowerSettingsNewIcon/> 
            </IconButton>
      </div>   
     </div>
     
  </div>
  )
}

export default Navbar