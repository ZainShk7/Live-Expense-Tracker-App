import React , {useContext}from 'react'
import "./List.css"
import { GlobalContext } from '../../context/GlobalState';
import Transaction from '../../context/Transaction';


export default function List() {
    const {transactions}=useContext(GlobalContext);

    return (
        <div className="container">
            <h3>Expense List</h3>
            <ul className="List">
            {transactions.map((transaction)=>{
                return <Transaction key={transaction.id} transaction={transaction}/>
            })}
            </ul>
            {/* <hr/> */}
        </div>
    )
}
