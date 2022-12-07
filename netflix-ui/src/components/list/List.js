import React from 'react'
import "./List.css"
import ListItem from '../ListItem/ListItem'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function List() {
  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className='wrapper'>
        <div className='items'>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </div>
         <ArrowBackIosIcon sx={{color:"white",backgroundColor:"red"}} className='sliderArrow-left'/>
        <ArrowForwardIosIcon sx={{color:"white",backgroundColor:"red"}} className='sliderArrow-right'/>
      </div>
    </div>
  )
}

export default List