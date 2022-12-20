import React from 'react'
import { GrPlayFill } from "react-icons/gr";
import {SlInfo} from "react-icons/sl";
import Navbar from './Navbar'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import "./style.css"
function Netflix({type}) {
  
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
  { type && <div className='genre'>
           <span> {type ==='movies'? 'movies':'series'}</span>   
           <select name='genre' id='genre'>
              <option>Genre</option>
              <option value='action'>Action</option>
              <option value='comedy'>Comedy</option>
              <option value='horror'>Horror</option>
              <option value='romance'>Romance</option>
              <option value='drama'>Drama</option>
              <option value='documentary'>Documentary</option>
              
            </select>     
         </div>}
      <div className='content'>
         
        <div>
        <p>STRANGER THINGS</p>
        </div>
        <div className='HomeButt'>
        <Button onClick={handlePlay} sx={{backgroundColor:"white",color:"black","&:hover": {backgroundColor: "white", }}}  className='play'><GrPlayFill style={style} />Play</Button>
        <Button sx={{backgroundColor:"Gray",color:'black',"&:hover": {backgroundColor: "Gray"}}}  className='more'><SlInfo style={style}/>More info</Button>
        </div>
        
      </div>
      
     

   
   </div>
  )
}

export default Netflix