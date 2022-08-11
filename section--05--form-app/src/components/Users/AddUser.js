import Button from '../UI/Button';
import classes from './AddUser.module.css';


function AddUser({
    inputName,
    inputAge,
    inputNameHandler,
    inputAgeHandler,
    addHandler
}) {
    return (
        <form
            className={classes.input}
            onSubmit={addHandler}
        >
            <label htmlFor="username">Username</label>
            <input
                id="username"
                value={inputName}
                onChange={inputNameHandler}
            />
            <label htmlFor="age">Age</label>
            <input
                id="age"
                type="number"
                value={inputAge}
                onChange={inputAgeHandler}
            />
            <Button type='submit'>Add User</Button>
        </form>
    );
}

export default AddUser;