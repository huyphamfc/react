import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';


function Expenses({ expensesRecord }) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(+selectedYear);
    }

    const expenses = expensesRecord
        .filter(obj => obj.date.getFullYear() === filteredYear);

    let expensesContent = <p>No expenses found</p>;

    if (expenses.length > 0)
        expensesContent = expenses.map((obj, index) =>
            <ExpenseItem key={index}{...obj} />);

    return (
        <Card className='expenses'>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={e => filterChangeHandler(e)}
            />
            {expensesContent}
        </Card>
    );
}

export default Expenses;