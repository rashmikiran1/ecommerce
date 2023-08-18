import React from "react";
import { useCart } from "../store/cartContext";
import classes from '../style/product.module.css';
const Products = ()=> {
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    const { addToCart, cart } = useCart();

    const getQuantityInCart = (title) => {
        const cartItem = cart.find((item) => item.title === title);
        return cartItem ? cartItem.quantity : 0;
      };

     return (
        <div className={classes.product}>
        {productsArr.map((product, index) => (
        <div key={index}>
          <img src={product.imageUrl} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity in Cart: {getQuantityInCart(product.title)}</p>
          <button onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
      ))}
        
        </div>
     )  
 }
export default Products;