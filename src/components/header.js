import React, {useState,Fragment, useContext} from "react";
import classes from '../style/header.module.css';
import { useCart } from "../store/cartContext";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";

import Cart from "./cart";
const Header = ()=> {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalVisible(!isCartModalVisible);
  };
    const { cart } = useCart();
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <Fragment>
        <div className={classes.header}>
        <div className={classes.centerItems}>
        {isLoggedIn && (
        <NavLink to="/home" className={classes.link}>
        HOME
        </NavLink>
        )}
        {isLoggedIn && (
        <NavLink to="/store" className={classes.link}>
        STORE
        </NavLink>
        )}
        {isLoggedIn && (
        <NavLink to="/about" className={classes.link}>
        ABOUT
        </NavLink>
        )}
        {isLoggedIn && (
        <NavLink to="/contact" className={classes.link}>
        CONTACT
        </NavLink>
        )}
        <NavLink to="/" className={classes.link}>
        SignUp
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