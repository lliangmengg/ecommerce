import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);


function ShopContextProvider (props){
    const [all_products , setAll_products] = useState([]);
    const [menu , changeMenu] = useState("Home");

    function setMenu(page){
        changeMenu(page);
    }
  
    let cart = {};
    const getDefaultCart = () =>{
    
        for (let index = 1; index <=300; index++) {
           cart [index] = 0;   
        }
        return cart;
    }
    const [cartItems , setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/product/allproducts')
        .then((response)=>response.json())
        .then((data)=>{setAll_products(data)});

        if(localStorage.getItem('auth-token')){
            try{
                fetch('http://localhost:4000/getcartdata',{
                    method: 'POST',
                    headers:{
                        Accept:'application/json',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-type':'application/json'
                    },
                    body: ""
                })
                .then((response)=> response.json())
                .then((data)=>setCartItems(data));
            }catch(err){
                console.log(err);
            }
        }
    },[])
   

    function addToCart(id){
        setCartItems((prevCart)=>({
                    ...prevCart,
                    [id]:prevCart[id] + 1}));
            
        if(localStorage.getItem('auth-token')){
            try{
                fetch('http://localhost:4000/addtocart',{
                    method: 'POST',
                    headers:{
                        Accept:'application/json',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({
                        "id":id
                    })
                }).then((response)=> response.json()).then((data)=>console.log(data))
            }catch(err){
                console.log(err);
            }
         }else{
            alert("Please login to add products to cart")
         }
        
    };

    function removeFromCart(id){
        setCartItems((prevCart)=>{
            return(
                {
                    ...prevCart,
                    [id]:prevCart[id] - 1
                }
            )
        })
        if(localStorage.getItem('auth-token')){
            try{
                fetch('http://localhost:4000/removefromcart',{
                    method: 'POST',
                    headers:{
                        Accept:'application/json',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({
                        "id":id
                    })
                }).then((response)=> response.json()).then((data)=>console.log(data))
            }catch(err){
                console.log(err);
            }
        }
        else{
            alert("Please authenticate yourself before performing the action")
        }
       
    };

    function ItemsAmount(){
        let ItemsAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]> 0){
                ItemsAmount +=cartItems[item];
            }
        }
       
       return ItemsAmount
    }
    
    const contextValue = {all_products , cartItems,menu, addToCart ,removeFromCart, ItemsAmount, setMenu};

    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider;