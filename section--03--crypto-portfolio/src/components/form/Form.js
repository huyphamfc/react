import FormItem from './FormItem';
import FormButton from './FormButton';

import './Form.css';


function Form() {
    return (
        <form className='container form'>
            <FormItem
                label='Cryptocurrency:'
                inputType='text'
                inputId='crypto'
            />
            <FormItem
                label='Amount:'
                inputType='number'
                inputId='amount'
            />
            <FormItem
                label='Date:'
                inputType='date'
                inputId='date'
            />
            <FormButton />
        </form>
    );
}

export default Form;