import React from "react";
import Modal from "../UI/modal";
import { useCart } from "../store/cartContext";
const Cart = ()=> {
    const { cart } = useCart();
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
    return (
        <Modal>
          {cart.map((item, index) => (
        <div key={index} >
          {cartElements}
        </div>
      ))}
        </Modal>
    )
}
export default Cart;