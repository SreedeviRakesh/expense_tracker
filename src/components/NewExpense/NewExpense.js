import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsediting] = useState(false)

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsediting(false);
    };

    const startEditingHandler = () => {
        setIsediting(true);
    }
    const stopEditingHandler = () => {
        setIsediting(false);
    }

    return <div className="new-expense">
        {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
        {isEditing && (<ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler}/>)}
    </div>
}

export default NewExpense;