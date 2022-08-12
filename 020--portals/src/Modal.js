import ReactDOM from 'react-dom';

import classes from './Modal.module.css';


function ModalRoot() {
    return (
        <div className={classes['modal-container']} />
    );
}

function ModalContentRoot({ closeModal }) {
    return (
        <div className={classes['modal-content']}>
            <h1>Modal Title</h1>
            <p>Modal Content</p>
            <button onClick={closeModal}>Close Modal</button>
        </div>
    );
}

function Modal({ closeModal }) {
    return (
        <>
            {ReactDOM.createPortal(
                <ModalRoot />,
                document.getElementById('modal-root')
            )}
            {ReactDOM.createPortal(
                <ModalContentRoot closeModal={closeModal} />,
                document.getElementById('modal-content-root')
            )}
        </>
    );
}

export default Modal;