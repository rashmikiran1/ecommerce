import React from "react";
import { useCart } from "../store/cartContext";
import classes from '../style/product.module.css';
const Products = ()=> {
const productsArr = [

    {
    
    title: 'Album 1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Album 4',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    const { addToCart } = useCart();


     return (
        <div className={classes.product}>
        {productsArr.map((product, index) => (
        <div key={index}>
          <h2 className={classes.title}>{product.title}</h2>
          <div className={classes.imageContainer}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={classes.image}
            />
          </div>
          <div className={classes.cart}>
          <p>Price: ${product.price}</p>
        
          <button onClick={() => addToCart(product)}>ADD TO CART</button>
          </div>
        </div>
      ))}
        
        </div>
     )  
 }
export default Products;