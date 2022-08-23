import classes from './TaskItem.module.css';


function TaskItem({ children }) {
    return (
        <li className={classes.task__item}>
            {children}
        </li>
    );
}

export default TaskItem;