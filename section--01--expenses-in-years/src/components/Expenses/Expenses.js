import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


function Expenses({ expensesRecord }) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(+selectedYear);
    }

    const expenses = expensesRecord
        .filter(obj => obj.date.getFullYear() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={e => filterChangeHandler(e)}
            />
            <ExpensesChart expenses={expenses} />
            <ExpenseList expenses={expenses} />
        </Card>
    );
}

export default Expenses;