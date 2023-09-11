import React, { useContext, useState } from "react";
import Modal from "../UI/modal";
import { useCart } from "../store/cartContext";
import AuthContext from "../store/authContext";

import classes from '../style/cart.module.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(true);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const closeCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <>
      {isCartOpen && (
        <Modal onClose={closeCart}>
          <div>
            {cart.map((item, index) => (
              <div key={index}>
                <div className={classes.cart}>
                  <div>{item.title}</div>
                  <div>${item.price}</div>
                  <div>{item.quantity}</div>
                  <button onClick={() => removeFromCart(item)}>REMOVE</button>
                </div>
              </div>
            ))}
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
