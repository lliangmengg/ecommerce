import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../Assets/upload_area.png'

export default function Addproduct (props) {
  const [image , setImage] = useState(false);
  const [productDetails , setProductDetails] = useState({
    "name": props.name,
    "category": props.category,
    "old_price": props.old_price,
    "new_price": props.new_price,
    "image": props.image,
  })

  function imageHandler(event){
    setImage(event.target.files[0]);
  }

  function changeHandler(event){
    let detail = event.target.name;
    let value = event.target.value;
    setProductDetails((prevData)=>{
      return{
        ...prevData,
        [detail]: value,
      }
    })
    console.log(productDetails);
  }

async function add_product(){
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product' , image);
    await fetch('http://localhost:4000/upload', {
      method: "POST",
      headers:{
        Accept: 'application/json'
      },
      body: formData,   
  }).then((res)=> res.json()).then((data)=>{responseData = data});
  
  if(responseData.success){
    product.image = responseData.image_url;
    console.log(product);
    await fetch('http://localhost:4000/addproduct' , {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then((res)=> res.json()).then((data)=>{
      if(data.success){
        alert("Product Added");
        setProductDetails({
          "name": "Berghaus Panel T-Shirt Set Children",
          "category":"kid",
          "old_price": "100",
          "new_price": "60",
          "image": "",
        })
        setImage(false);
      }else{
    console.log("fail")
  }

}
    )}
}

  return (
    <div className='addproduct'>

      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input name = "name" value = {productDetails.name} onChange = {changeHandler} type = "text" placeholder='Item name'/>
      </div>

      <div className="addproduct-prices">
        <div className="addproduct-price">
            <p>Old Price</p>
            <input  name = "old_price" value = {productDetails['old_price']} onChange = {changeHandler} type = "text" placeholder='Old Price'/>
        </div>

        <div className='addproduct-price'>
            <p>New Price</p>
            <input name = "new_price" value = {productDetails['new_price']} onChange = {changeHandler} type = "text" placeholder='New Price'/>
        </div>
      </div>
      
      <div className="addproduct-category">
          <p>Category</p>
          <select name="category" value={productDetails.category} onChange={changeHandler}  placeholder ='product category'>
              <option value= "men">Men</option>
              <option value= "women">Women</option>
              <option value= "kid">Kids</option>
          </select>
      </div>

      <div className="addproduct-image">
        <label htmlFor='file-input'>
            <img src ={image? URL.createObjectURL(image): upload_area}  alt = ""/>
        </label>
        <input onChange ={imageHandler} type='file' name = 'image' id = 'file-input' hidden></input>
        <button onClick={() => {add_product()}}>ADD</button>
      </div>
        
    
     </div>
    
  )
}
