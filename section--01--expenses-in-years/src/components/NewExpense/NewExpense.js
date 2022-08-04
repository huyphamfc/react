import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [isEditing, setEditing] = useState(false);

    const startEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);

        setEditing(false);
    }

    return (
        <div className="new-expense">
            {
                !isEditing &&
                <button onClick={startEditingHandler}>
                    Add New Expense
                </button>
            }
            {
                isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    );
}

export default NewExpense;