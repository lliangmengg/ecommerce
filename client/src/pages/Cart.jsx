import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItems from '../components/CartItems/CartItems';
function ShoppingCart () {
  return (
    <div>
      <CartItems/>
    </div>
  )
}

export default ShoppingCart;
