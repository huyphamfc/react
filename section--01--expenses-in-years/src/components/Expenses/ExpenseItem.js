import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({ date, title, amount }) {
    const [titleState, setTitle] = useState(title);

    const clickHandler = () => {
        setTitle('Title was changed!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{titleState}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;