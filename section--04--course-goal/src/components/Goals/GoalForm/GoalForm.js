import Button from '../../UI/Button/Button';
import './GoalForm.css';


function GoalForm({
    inputValue,
    inputHandler,
    addHandler
}) {
    return (
        <form onSubmit={addHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input
                    value={inputValue}
                    onChange={inputHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default GoalForm;