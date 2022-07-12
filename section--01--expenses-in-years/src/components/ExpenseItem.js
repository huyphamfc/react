import './ExpenseItem.css';

function ExpenseItem({ expenses }) {
    return expenses.map(({ date, title, amount }) => (
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    ));
}

export default ExpenseItem;