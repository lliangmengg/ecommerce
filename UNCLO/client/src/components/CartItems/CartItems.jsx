import { useState , useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext';

function CartItems(){
    const {all_products , cartItems , removeFromCart} = useContext(ShopContext);
    let Subtotal = 0;

    return (
    <div className='cart'>
        <div className="cart-top">
            <div className="cart-header">
                <p>Products</p>
                <p>Title</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr/>
            {all_products.map((item)=>{
                if(cartItems[item.id]>0){
                    Subtotal+=(item.new_price * cartItems[item.id]);
                    return(
                    <div className='cart-items'>
                        <div className='cart-item-row' key = {item.id} id = {item.id}>
                            <img src = {item.image} alt =""/>
                            <p>{item.name}</p>
                            <p>{cartItems[item.id]}</p>
                            <p>{item.new_price * cartItems[item.id]}</p>
                            <p onClick={()=>{removeFromCart(item.id)}}>X</p>
                        </div>
                        <hr/>
                    </div>
                    
                    )
                }

            })}

        </div>
        
       
        <div className='cart-bottom'>
            <div className="cart-total">
                <h1>Cart Totals</h1>
                <div className="cart-total-breakdowns">
                    <p><span>Subtotal:</span> <span>${Subtotal}</span></p> 
                    <hr/>
                    <p><span>Shipping Fee: </span><span>${(Subtotal*0.09).toFixed(2)}</span></p>
                    <hr/>
                    <p><span>Total:</span> <span>${(Subtotal*1.09).toFixed(2)}</span></p>
                </div>    
            </div>

            <div className="cart-promo-code">
                <input type='text' placeholder='Promo Code'/>
                <button>Submit</button>
            </div>
        </div>
        
        <div className="checkout">
        </div>
        
       

    </div>)



}

export default CartItems;