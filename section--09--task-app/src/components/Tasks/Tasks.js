import { useState, useEffect } from 'react';

import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';


function Tasks() {
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch('https://task-app-huypham-default-rtdb.firebaseio.com/tasks.json');

            const data = await res.json();

            const processedData = [];
            for (const key in data) {
                processedData.push(data[key].task);
            }
            setTasks(processedData);
        } catch (err) {
            setError(err.message || 'Something wrong!');
        }

        setIsLoading(false);
    }

    let content;
    if (tasks.length > 0) {
        content = tasks.map((item, index) =>
            <TaskItem key={index}>{item}</TaskItem>
        );
    }
    if (tasks.length === 0) {
        content =
            <li className={classes.tasks__message}>
                No Found.
            </li>
    }
    if (error) {
        content =
            <li className={classes.tasks__error}>
                {error}
            </li>
    }
    if (isLoading) {
        content =
            <li className={classes.tasks__message}>
                Loading...
            </li>
    }

    return (
        <Section>
            <ul className={classes.tasks}>
                {content}
            </ul>
        </Section>
    );
}

export default Tasks;