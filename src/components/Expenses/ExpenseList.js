import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {    
    if (props.expense.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense</h2>
    }
    return <ul className="expenses-list">
            {props.expense.map(item => (
            <ExpenseItem 
              key={item.id}
              title={item.title} 
              price={item.amount} 
              date={item.date}
              />))}
            </ul>
}


export default ExpenseList;