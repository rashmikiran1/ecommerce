import { Fragment } from "react";
import  ReactDOM from "react-dom";
import classes from '../style/modal.module.css';
const Overlay = (props) => {
    return (
        <div className={classes.modal}>
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