import React, {useState,Fragment} from "react";
import classes from '../style/header.module.css';
import { useCart } from "../store/cartContext";
import { NavLink } from "react-router-dom";

import Cart from "./cart";
const Header = ()=> {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalVisible(!isCartModalVisible);
  };
    const { cart } = useCart();
    return (
        <Fragment>
        <div className={classes.header}>
        <div className={classes.centerItems}>
        <NavLink to="/home" className={classes.link}>
        HOME
        </NavLink>
        <NavLink to="/" className={classes.link}>
        STORE
        </NavLink>
        <NavLink to="/about" className={classes.link}>
        ABOUT
        </NavLink>
        <NavLink to="/contact" className={classes.link}>
        CONTACT
        </NavLink>
        </div>
        <button className={classes.cart} onClick={toggleCartModal}>CART  ({cart.length})</button>
        {isCartModalVisible && <Cart />}
        </div>
        <div className={classes.genre}>THE GENERICS</div>
        </Fragment>
    )
}
export default Header