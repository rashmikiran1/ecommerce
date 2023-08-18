import { Fragment } from "react";
import  ReactDOM from "react-dom";
import classes from '../style/modal.module.css';
const Overlay = (props) => {
    return (
        <div className={classes.modal}>
            <h1 className={classes.title}>CART</h1>
            <div className={classes.style}>
                <div>TITLE</div>
                <div>PRICE</div>
                <div>QUANTITY</div>
               
            </div>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const element = document.getElementById('overlay');

const Modal = (props)=> {
    return (
        <Fragment>
            
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, element)}
        </Fragment>
    ) 
}
export default Modal