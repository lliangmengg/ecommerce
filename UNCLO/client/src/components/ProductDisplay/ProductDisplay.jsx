import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import dull_star from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';
function ProductDisplay (props) {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productDisplay">
        <div className='productDisplay-left'>
            <div className='productDisplay-image-list'>
                <img src = {product.image} alt = {product.name}/>
                <img src = {product.image} alt = {product.name}/>
                <img src = {product.image} alt = {product.name}/>
                <img src = {product.image} alt = {product.name}/>
            </div>

            <div className="productDisplay-image-main">
                <img src = {product.image} alt = {product.name}/>
            </div>
        </div>

        <div className="productDisplay-right">
           <h1>{product.name}</h1>
           <p className='productDisplay-product-category'><span>Category: </span>{product.category.toUpperCase()}</p>
           <div className="productDisplay-star">
                <img src = {star} alt = ""/>
                <img src = {star} alt = ""/>
                <img src = {star} alt = ""/>
                <img src = {star} alt = ""/>
                <img src = {dull_star} alt = ""/>
                <p>(122)</p>
           </div>
           <div className="productDisplay-prices">
                <div className="productDisplay-old-price">${product.old_price}</div>
                <div className="productDisplay-new-price">${product.new_price}</div>
           </div>
           <div className="productDisplay-description">
            <p>
               Elevate your wardrobe with our latest addition!
               Designed for both style and comfort, this versatile piece 
               is perfect for any occasion. Crafted from premium materials, 
               it features a modern slim fit and a sleek, minimalist design. 
               Whether you're heading to a casual outing or a night on the town, 
               this item will keep you looking effortlessly cool. Pair it with 
               your favorite jeans for a laid-back vibe, or dress it up with tailored 
               pants for a more polished look. With its timeless appeal and impeccable 
               craftsmanship, this piece is sure to become a staple in your wardrobe. 
               Upgrade your style game today!
            </p>
           </div>
           <div className="prodcutDisplay-select-size">
                <h1>Select size</h1>
                <div >
                    <ul className="productDisplay-sizes">
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
        </div>
    </div>

  )
}


export default ProductDisplay;