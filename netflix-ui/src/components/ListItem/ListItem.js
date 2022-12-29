import React, { useEffect } from 'react'
import axios from 'axios'
import "./ListItem.css"
import { useState } from 'react'
const ListItem = (props) => {
  const {title,type,genre,content}=props.list
  const [movie, setmovie] = useState({})

 const getMovie = async() => {
  const res = await axios.get(`movie/find/${content}`)
  const data = res.data
  setmovie(data.movie)
 }
  // useEffect(() => {
  //   getMovie()
  //   // console.log(movie)
  // }, [])

  return (
    <div className='listitem'>
       <h2>{title}</h2>
       <h3>{type}</h3>
        <h3>{genre}</h3>
        <img src={content}></img>
    </div>
  )
}

export default ListItem
