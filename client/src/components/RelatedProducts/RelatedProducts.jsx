import './RelatedProducts.css'
import Item from '../Item/Item.jsx'
import { ShopContext } from '../../context/ShopContext.jsx';
import { useContext } from 'react';

function RelatedProducts(props){
    const {all_products} = useContext(ShopContext);
    var counter = 0;
    return(
        <div>
            <div className="related-products-header">
                 <h1>Related Products</h1>
                 <hr/>
            </div>
          
            <div className="related-products-items">
                {all_products.map(
                    (item) =>{
                        if(item.category === props.category && item.id !== props.id && counter < 4){
                            counter++;
                            return (<Item 
                                key ={item.id}
                                id = {item.id}
                                image = {item.image} 
                                name = {item.name}    
                                old_price = {item.old_price}  
                                new_price = {item.new_price} 
                                /> ) 
                        }
                    }
                )}

            </div>
        </div>
    )
}

export default RelatedProducts;