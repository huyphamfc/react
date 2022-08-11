import Button from './Button';
import classes from './ErrorModal.module.css';


function ErrorModal({
    title,
    message,
    errorHandler
}) {
    return (
        <div className={classes.backdrop}
            onClick={errorHandler}
        >
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <main>
                    <p>{message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button onClick={errorHandler}>OK</Button>
                </footer>
            </div>
        </div>
    );
}

export default ErrorModal;