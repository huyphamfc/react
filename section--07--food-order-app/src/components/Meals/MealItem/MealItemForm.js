import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


function MealItemForm({ id }) {
    return (
        <form className={classes.form}>
            <Input
                label='Amount'
                id={`amount_${id}`}
                inputProps={{
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;