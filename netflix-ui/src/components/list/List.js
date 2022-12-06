import React from 'react'
import "./List.css"
import ListItem from '../ListItem/ListItem'

function List() {
  return (
    <div className='list'>
      <div className='items'>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </div>
     
    </div>
  )
}

export default List