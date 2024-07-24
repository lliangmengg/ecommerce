import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product from '../../Assets/add_product.png'
import list_icon from '../../Assets/product_list.png'
export default function Sidebar (){
  return (
    <div className='sidebar'>
        <Link to ={'/addproduct'} style = {{textDecoration: "none"}}>   
            <img src = {add_product} alt = "" />
                <p>Add Product</p>
        </Link>

        <Link to ={'/allproducts'} style = {{textDecoration: "none"}}>
            <img src = {list_icon} alt = ""/>
            <p>View Product List</p>
        </Link>

    </div>
  )
}
