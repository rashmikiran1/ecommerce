import React from "react";
import { useCart } from "../store/cartContext";
import classes from '../style/product.module.css';
import { Link } from "react-router-dom";
import ProductsArr from "./productData";

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className={classes.product}>
      {ProductsArr.map((product, index) => (
        <div key={index}>
          <h2 className={classes.title}>{product.title}</h2>
          <div className={classes.imageContainer}>
            <Link to={`/product/${index}`}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className={classes.image}
              />
            </Link>
          </div>
          <div className={classes.cart}>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
