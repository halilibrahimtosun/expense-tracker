import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    // const expenses = [
    //     { id: 12, name: 'shopping', cost: 40 },
    //     { id: 13, name: 'holiday', cost: 400 },
    //     { id: 14, name: 'car service', cost: 50 },
    // ];
    const { expenses } = useContext(AppContext);
    return (
        <ul className="list-group">
            {
                expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                })
            }
        </ul>
    )
}

export default ExpenseList
