import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { ShopContext } from "../../context/ShopContext";


function Navbar(){
  
    const {ItemsAmount , menu,  setMenu} = useContext(ShopContext);
    
    
    

    function logout(){
        localStorage.removeItem('auth-token');
        window.location.replace('/')
    }

    return (
        <div className="navbar">
       
        <div className = "logo">
            <Link to = '/' onClick={()=>setMenu("Home")}>
                <img src ={logo} alt = "logo" ></img>
                <h1>U.N.C.L.O.</h1>
            </Link>
        </div>

        <div >
            <ul className="menu">
                <li onClick={()=>setMenu("men")}><Link to = '/mens'>Mens</Link> {menu === "men"? <hr></hr> : null}</li>
                <li onClick={()=>setMenu("women")}><Link to = '/womens'>Womens</Link> {menu === "women"? <hr></hr> : null}</li>
                <li onClick={()=>setMenu("kid")}><Link to = '/kids'>Kids</Link>{menu === "kid"? <hr></hr> : null}</li>
            </ul>
        </div>

        <div className="cart-login">
           
            <Link to='/cart' onClick={()=>setMenu("cart")}><img src = {cart}/></Link>
            <div className="cart-counter">{ItemsAmount()}</div>
            {localStorage.getItem('auth-token')? 
            <button onClick={()=>{logout()}}>Logout</button>
            :
            <Link to='/login' onClick={()=>setMenu("login")}><button>Login</button></Link>
}
            
        </div>
        </div>
    )
}


export default Navbar;