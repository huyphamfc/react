import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';


const Backdrop = ({ onHideCart }) =>
    <div
        className={classes.backdrop}
        onClick={onHideCart}
    />;

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
}

const modalRoot = document.getElementById('modal-root');

function Modal({
    onHideCart,
    children }) {
    return (<>
        {ReactDOM.createPortal(
            <Backdrop onHideCart={onHideCart} />,
            modalRoot
        )}
        {ReactDOM.createPortal(
            <ModalOverlay>
                {children}
            </ModalOverlay>,
            modalRoot
        )}
    </>);
}

export default Modal;