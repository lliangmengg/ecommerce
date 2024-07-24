import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import {Link} from 'react-router-dom'
export default function Listproduct(){
  const [allproducts, setAllProducts] = useState([]);
  
  async function fetchProducts(){
      await fetch('http://localhost:4000/allproducts')
           .then((res) => res.json())
           .then((data)=>{setAllProducts(data)});
  }
  

  useEffect(()=>{
    fetchProducts();
  },[]);

  async function remove_product(id){
    try{
      await fetch('http://localhost:4000/removeproduct',{
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
      });  
      await fetchProducts();
    }
    catch(err){
      console.log(err);
    }
   
  }

  return (
    <div className='list-product'>
      <div className="header">
         <h1>All Products List</h1>    
         <hr/>
      </div>
      
      <div className="list-product-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Edit</p>
      </div>
      <hr className="line-break" />
      <div className="list-product-all">
        {allproducts.map((product, index)=>{
          return(
            <>
            <div className="list-product-column-format">
                <img src= {product.image} alt="" className="product-image" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <Link to = '/editproduct'><span className='remove-icon'>❌</span></Link>
            </div>
            <hr/>
            </>
          )
        })}
      </div>
    </div>
  )
}
