import React, { useContext, useState } from 'react'
import {ShopContext} from '../context/ShopContext.jsx';
import {useParams} from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';


function Product (){
  const {all_products} = useContext(ShopContext);
  const {id} = useParams();
  const product = all_products.find((item)=>{
    return item.id === Number(id);
  });
  console.log("all" , all_products)
  console.log("product", product);

  return (
    
    <div>
       <Breadcrum product={product} />
       <ProductDisplay product = {product}/>
       <RelatedProducts category = {product.category} id = {product.id}/>

    </div>
  );
}

export default Product;