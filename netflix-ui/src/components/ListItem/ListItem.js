import React from 'react'
import axios from 'axios'
import "./ListItem.css"
const ListItem = (props) => {
  const {title,type,genre,content}=props.list

 const getMovie = async() => {
  const res = await axios.get(`movie/find/${content}`)
 }

  return (
    <div className='listitem'>
       <h2>{title}</h2>
    </div>
  )
}

export default ListItem
