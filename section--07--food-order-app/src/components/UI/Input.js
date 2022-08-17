import classes from './Input.module.css';


function Input({
    label,
    id,
    inputProps
}) {
    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...inputProps}
            />
        </div>
    );
}

export default Input;