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
    const handleLogout = () => {
      authCtx.logout();
    };
    return (
        <Fragment>
        <div className={classes.header}>
        <div className={classes.centerItems}>
        <NavLink to="/home" className={classes.link}>
        HOME
        </NavLink>
        <NavLink to="private/store" className={classes.link}>
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
        <div className={classes.genre}>THE GENERICS
        <div className={classes.logout}>
        <NavLink to="/" className={classes.signup}>
        Login
        </NavLink>
        <button onClick={handleLogout} className={classes.signup}>Logout</button>
        </div>
        </div>
        </Fragment>
    )
}
export default Header