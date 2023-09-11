import React, { createContext, useContext, useState, useEffect } from "react";
import { getCartData, saveCartData } from "./cartStorage";
import AuthContext from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const userCart = getCartData(authCtx.email);
    if (userCart) {
      setCart(userCart);
    }
  }, [authCtx.email]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.title === item.title);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));
  };
  
  useEffect(() => {
    saveCartData(authCtx.email, cart); 
  }, [cart, authCtx.email]);
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
