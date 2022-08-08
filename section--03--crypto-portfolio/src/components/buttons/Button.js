import './Button.css';


function Button({ children, submit = false, sub = false }) {
    let buttonType = submit ? 'submit' : 'button';
    let buttonClassName = sub ? 'btn btn--sub' : 'btn';

    return (
        <button
            className={buttonClassName}
            type={buttonType}
        >{children}</button>
    );
}

export default Button;