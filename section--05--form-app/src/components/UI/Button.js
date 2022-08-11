import classes from './Button.module.css';


function Button({
    type = 'button',
    onClick = null,
    children
}) {
    return (
        <button
            className={classes.button}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;