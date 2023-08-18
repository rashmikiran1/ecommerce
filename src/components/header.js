import React, {useState} from "react";
import classes from '../style/header.module.css';
import { useCart } from "../store/cartContext";
import Cart from "./cart";
const Header = ()=> {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalVisible(!isCartModalVisible);
  };
    const { cart } = useCart();
    return (
        
        <div className={classes.header}>
        <div className={classes.centerItems}>
            <div>HOME</div>
            <div>STORE</div> 
            <div>ABOUT</div>
            
        </div>
        <button className={classes.cart} onClick={toggleCartModal}>CART  ({cart.length})</button>
        {isCartModalVisible && <Cart />}
        </div>
    )
}
export default Header