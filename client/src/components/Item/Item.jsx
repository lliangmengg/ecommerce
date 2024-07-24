import React from 'react'
import './Item.css'
import {Link} from'react-router-dom'

function Item (props) {
  return (
   <Link to = {`/products/${props.id}`}>
      <div className='item' onClick={ window. window.scrollTo({
          top: 0,
          behavior: 'smooth' 
          })}>
        <img src = {props.image} alt ={props.name}/>
        
            <p className='name'>{props.name}</p>

            <div className='price'>
                <p className='new_price'>${props.new_price}</p>
                <p className='old_price'>${props.old_price}</p>
            </div>
        </div>
       
      
  </Link>
  )
}

export default Item;
