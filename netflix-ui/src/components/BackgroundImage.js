import React from 'react'
import BImage from "../Assets/Background.png"
import "./style.css"
function BackgroundImage() {
  return (
    <div className='BImage'>
        <img src={BImage}></img>
    </div>
  )
}

export default BackgroundImage