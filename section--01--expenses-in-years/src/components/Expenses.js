import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ expensesRecord }) {
    const expenses = expensesRecord.map(obj =>
        <ExpenseItem {...obj} />);

    return (
        <div className='expenses'>
            {expenses}
        </div>
    );
}

export default Expenses;