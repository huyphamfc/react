import './Button.css';


function Button({
    type,
    onClick = null,
    children
}) {
    return (
        <button
            className='button'
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;