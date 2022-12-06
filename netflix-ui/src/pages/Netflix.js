import React from 'react'
import { GrPlayFill } from "react-icons/gr";
import {SlInfo} from "react-icons/sl";
import Navbar from './Navbar'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import List from '../components/list/List';
function Netflix() {
  const style = { color: "black",
   fontSize: "1.5em",
   display: "flex",
  marginRight: "1vw",
  }
  const navigate = useNavigate()
 const handlePlay=()=>{
   navigate('/player')
  }
  
  return (
   <div className='netflix-main'>
      <Navbar/>
      <div className='content'>
        <div>
        <p>STRANGER THINGS</p>
        </div>
        <div className='HomeButt'>
        <Button onClick={handlePlay} sx={{backgroundColor:"white",color:'black'}} variant="contained" className='play'><GrPlayFill style={style} />Play</Button>
        <Button sx={{backgroundColor:"white",color:'black'}} variant="contained" className='more'><SlInfo style={style}/>More info</Button>
        </div>
        
      </div>
      <div className='list'>
      <List></List>
      </div>
     

   
   </div>
  )
}

export default Netflix