import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: titleInput,
            amount: amountInput,
            date: new Date(dateInput)
        }

        props.onSaveExpenseData(expenseData);
        setTitleInput('');
        setAmountInput('');
        setDateInput('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        value={titleInput}
                        type="text"
                        onChange={e => setTitleInput(e.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        value={amountInput}
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={e => setAmountInput(e.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        value={dateInput}
                        type="date"
                        min="2020-01-01"
                        max="2022-12-31"
                        onChange={e => setDateInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;