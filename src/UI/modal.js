import React from "react";
import ReactDOM from "react-dom";
import classes from "../style/modal.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <button className={classes.closeButton} onClick={props.onClose}>
        X
      </button>
      <h1 className={classes.title}>CART</h1>
      <div className={classes.style}>
        <div>TITLE</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const overlayElement = document.getElementById("overlay");

  return ReactDOM.createPortal(
    <Overlay onClose={props.onClose}>{props.children}</Overlay>,
    overlayElement
  );
};

export default Modal;
