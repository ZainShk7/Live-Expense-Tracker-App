import React,{useContext} from "react";
import "./TransactionList.css"

//Import the Global State
import { GlobalContext } from "./GlobalState";


export default function Transaction({ transaction }) {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.Amount > 0 ? '+' : '-';
    const transactionType = transaction.Amount > 0 ? "plus" : "minus";
    return <>
        <li className={transactionType} id="TransList">
            {transaction.DESCRIPTION} <span>{sign}${Math.abs(transaction.Amount)}</span>
            <button type="button" class="btn btn-danger delbtn" onClick={() => {
                delTransaction(transaction.id)
            }}><i class="fas fa-minus-square"></i></button>
        </li>
    </>

}

    