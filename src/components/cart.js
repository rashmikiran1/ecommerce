import React from "react";
import Modal from "../UI/modal";
import { useCart } from "../store/cartContext";
import classes from '../style/cart.module.css';
const Cart = ()=> {
    const { cart, removeFromCart } = useCart();
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
    return (
        <Modal>
         {cart.map((item, index) => (
        <div >
          <div key={index} className={classes.cart}>
          <div>{item.title}</div>
          <div>${item.price}</div>
          <div>{item.quantity}</div>
          <button onClick={() => removeFromCart(item)}>REMOVE</button>
        </div>
        </div>
      ))}
       <p>Total Price: ${calculateTotalPrice()}</p>
        </Modal>
    )
}
export default Cart;