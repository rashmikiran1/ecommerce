import React from "react";
import classes from '../style/header.module.css';
import { useCart } from "../store/cartContext";
const Header = ()=> {
    const { cart } = useCart();
    return (
        <div className={classes.header}>
        <div className={classes.centerItems}>
            <div>HOME</div>
            <div>STORE</div> 
            <div>ABOUT</div>
            
        </div>
        <div className={classes.cart}>CART  ({cart.length})</div>
        </div>
    )
}
export default Header