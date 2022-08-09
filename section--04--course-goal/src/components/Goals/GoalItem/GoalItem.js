import { memo } from 'react';

import './GoalItem.css';


function GoalItem({
    id,
    deleteHandler,
    children
}) {
    return (
        <li
            className="goal-item"
            key={id}
            onClick={() => deleteHandler(id)}
        >
            {children}
        </li>
    );
}

export default memo(GoalItem);