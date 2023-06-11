import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [expenseYear, enteredExpenseYear] = useState('2020')

    const selectedYearHandler = (selectedYear) => {
        enteredExpenseYear(selectedYear)
      }     
    const filteredExpense = props.items.filter(item => {return item.date.getFullYear().toString() === expenseYear});
    
    return (
        <div>
            <Card className="expenses">   
                <ExpensesFilter filteredYear={expenseYear} onSelectedYear={selectedYearHandler} />
                <ExpensesChart expenses={filteredExpense}/>
                <ExpenseList expense = {filteredExpense}/>                          
            </Card>
    </div>
    )
}

export default Expenses;