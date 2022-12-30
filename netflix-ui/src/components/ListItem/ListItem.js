import React, { useEffect } from 'react'
import axios from 'axios'
import "./ListItem.css"
import { useState } from 'react'
const ListItem = ({...props}) => {
  // const{content}=props.content
  const {title,type,genre}=props.list
  const {content}=props.list.content
  const [movie, setmovie] = useState({})
 const getMovie = async() => {
  const res = await axios.get(`movie/find/${content}`)
  const data = res.data
  console.log(data.movie)
  setmovie(data.movie)

 }
  useEffect(() => {
    getMovie()
    console.log(movie)
  }, [])
 
  return (
    <div className='listitem'>
       <h2>{movie.title}</h2>
       <h3>{type}</h3>
        <h3>{genre}</h3>
        <img src={movie.img}></img>
    </div>
  )
}

export default ListItem
