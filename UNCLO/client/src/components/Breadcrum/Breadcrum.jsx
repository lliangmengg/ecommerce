import React from 'react'
import './Breadcrum.css'


function Breadcrum (props){
    const {product} = props;
    const arrow = ">"
  return (
    <div className='Breadcrum'>
        <p>HOME  {arrow} {product.category.toUpperCase()} {arrow} {product.name.toUpperCase()}</p> 
    </div>
    
  )
}

export default Breadcrum;
