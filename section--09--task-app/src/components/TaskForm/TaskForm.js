import { useState } from 'react';

import Section from '../UI/Section';
import classes from './TaskForm.module.css';


function TaskForm() {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    async function sendHandler() {
        setError(null);

        try {
            await fetch(
                'https://task-app-huypham-default-rtdb.firebaseio.com/tasks.json',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ task: inputValue })
                }
            );
        } catch (err) {
            setError(err.message);
        }
    }

    const inputHandler = e => {
        setInputValue(e.target.value);
    }

    const addHandler = e => {
        e.preventDefault();

        if (!inputValue) return;

        sendHandler(inputValue);

        setInputValue('');
    }

    const errorMessage = error ?
        <p className={classes.form__error}>
            {error}
        </p> :
        null

    return (
        <Section>
            <form
                className={classes.form}
                onSubmit={addHandler}
            >
                <input
                    className={classes.form__input}
                    value={inputValue}
                    onChange={inputHandler}
                />
                <button className={classes.form__btn}>
                    Add Task
                </button>
            </form>
            {errorMessage}
        </Section>
    );
}

export default TaskForm;