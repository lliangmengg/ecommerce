import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropDown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item.jsx';

function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);
  const [itemCount, setItemCount] = useState(8); // Initial items to show

  // Filter products by the selected category
  const productsInCategory = all_products.filter(item => item.category === props.category);

  // Get the count of products in the selected category
  const productCount = productsInCategory.length;

  // Show more products function
  function showMoreProducts() {
    setItemCount(prevCount => Math.min(prevCount + 8, productCount));
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-{Math.min(itemCount, productCount)}</span> out of {productCount} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropDown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {productsInCategory.slice(0, itemCount).map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
            image={item.image}
          />
        ))}
      </div>
      {itemCount < productCount && (
        <div onClick={showMoreProducts} className='shopcategory-loadmore'>
          More products...
        </div>
      )}
      <hr />
    </div>
  );
}

export default ShopCategory;
