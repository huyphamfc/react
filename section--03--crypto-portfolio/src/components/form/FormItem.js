import './FormItem.css';


function FormItem({ label, inputType, inputId }) {
    return (
        <div className="form__item">
            <label htmlFor={inputId}>{label}</label>
            <input className="form__input" type={inputType} id={inputId} />
        </div>
    );
}

export default FormItem;