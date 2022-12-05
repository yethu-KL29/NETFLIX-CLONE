import React from 'react'
import "./style.css"
function Player() {
  return (
    <div>
        <iframe
                width="560"
                height="315" 
                src="https://www.youtube.com/embed/yQEondeGvKo" 
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope; 
                picture-in-picture"
                allowfullscreen>
        </iframe>
    </div>
  )
}

export default Player