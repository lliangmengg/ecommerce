import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Item/Item.jsx'

function NewCollection () {
  const [newCollections , setNewCollection] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/product/new')
    .then((responsse)=>responsse.json())
    .then((data)=>setNewCollection(data));
  },[]);

  return (
    <div className='new-collections'>
        <div className='new-collections-header'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        </div>
       

        <div className='collections'>
        
        {newCollections.map(
            (item) =>{
               return <Item 
               id = {item.id}
               key = {item.id} 
               name = {item.name} 
               old_price ={item.old_price} 
               new_price = {item.new_price} 
               image = {item.image}
               />
            }
        )}
        </div>
        
    </div>
  )
}

export default NewCollection;
