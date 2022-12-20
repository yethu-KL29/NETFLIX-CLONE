import React from 'react'
import "./ListItem.css"
const ListItem = (props) => {
  const {title,type,genre,content}=props.list
  return (
    <div className='listitem'>
       <h2>{title}</h2>
    </div>
  )
}

export default ListItem
