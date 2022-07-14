import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses({ expensesRecord }) {
    const expenses = expensesRecord.map((obj, index) =>
        <ExpenseItem
            key={index}
            {...obj}
        />);

    return (
        <Card className='expenses'>
            {expenses}
        </Card>
    );
}

export default Expenses;