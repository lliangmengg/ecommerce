import React from 'react'
import './Popular.css'
import Item from '../Item/Item.jsx'
import { useState , useEffect } from 'react';
function Popular () {
  const [popular , setPopular] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/product/popular')
    .then((responsse)=>responsse.json())
    .then((data)=>setPopular(data));
  },[]);
  return (
    <div>
        <div className='header'>
        <h1 >POPULAR IN WOMEN</h1>
         <hr/>
     
        </div>
         
         <div className='popular'>
        
         {popular.map(
            (item)=> {
                return (
                <Item 
                key ={item.id}
                id = {item.id}
                image = {item.image} 
                name = {item.name}    
                old_price = {item.old_price}  
                new_price = {item.new_price} 
                /> ) 
            }
         )}

         </div>


    </div>
   
  )
}

export default Popular;
