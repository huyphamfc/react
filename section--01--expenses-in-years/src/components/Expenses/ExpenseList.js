import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';


function ExpenseList({ expenses }) {
    if (expenses.length === 0)
        return (
            <p className="expenses-list__fallback">
                No expenses found.
            </p>
        );

    return (
        <ul className="expenses-list">
            {
                expenses.map((obj, index) =>
                    <ExpenseItem key={index}{...obj} />)
            }
        </ul>
    );
}

export default ExpenseList;