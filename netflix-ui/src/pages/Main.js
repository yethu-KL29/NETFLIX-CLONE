import React from 'react'
import Netflix from './Netflix'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react' 
import "./style.css"
import Carousel from "react-elastic-carousel"
import ListItem from '../components/ListItem/ListItem'

const Main = ({type}) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
  ];
  

  const [List, setlist] = useState([])
  const [genre, setgenre] = useState(null)
 

 useEffect(() => {
  const getRandomList = async() => {
    const res = await axios.get(
      `list/getlist${type ? "?type="+type : ""} ${genre ? "&genre=" + genre:""}`
      )
      const data = res.data
      setlist(data.list)
     
      console.log("list is "+List)

  }
  getRandomList()
 }, [type, genre])


console.log(List)
  return (
    <div>
      <Netflix type={type}/>
      <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className='items' >
        <Carousel breakPoints={breakPoints}>
          
          {List && List.map((list,i)=>{
            
      return(
       
        <ListItem   list={list} />
      )
    })}
      
      </Carousel>

        </div>
        
      </div>

      
      </div>
    
  )
}

export default Main
