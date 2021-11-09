import React, { useState, useContext } from 'react'
//importing Global State
import { GlobalContext } from '../../context/GlobalState';
import "./Header.css"

export default function Header() {
    // const [Balance, setBalance] = useState(0.00);
    // const [Income, setIncome] = useState(0.00);
    // const [Expense, setExpense] = useState(-0.00);

    const {transactions}=useContext(GlobalContext);


    const transactionAmount = transactions.map((transaction) => transaction.Amount);

    const balance = transactionAmount.reduce((acc, item) => {
        return acc + item;
    }, 0).toFixed(2);

    const income = transactionAmount.filter((transaction) => transaction > 0).reduce((acc, item) => {
        return acc + item;
    }, 0).toFixed(2);

    const expense = transactionAmount.filter((transaction) => transaction < 0).reduce((acc, item) => {
        return acc + item;
    }, 0).toFixed(2);
    return <>
            <h1><b> Expense Tracker App by Zain Shk </b></h1>
            <br />
            <div className="container">
                <h2 id="balance">Current Balance <span style={{ color: "#D6ED17FF" }}>${balance}</span></h2>
            </div>
            <div className="Main-container">
                <div className="IncomeBox">
                    <h4>INCOME</h4>
                    <p className="Income">${income}</p>
                </div>
                <div>
                    <h4>EXPENSE</h4>
                    <p className="Expense">${Math.abs(expense)}</p>

                </div>
            </div>
        </>
}
