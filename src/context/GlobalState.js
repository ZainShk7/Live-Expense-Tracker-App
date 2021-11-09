import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    transactions: [
        // { id: 1, description: 'project 1 income', Amount: 1000 },
        // { id: 2, description: 'project 2 income', Amount: 2500 },
        // { id: 3, description: 'project 1 salary', Amount: -500 },
        // { id: 4, description: 'project 2 salary', Amount: -1500 },
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

function delTransaction(id){
    dispatch({
           type: "DELETE_TRANSACTION",
           payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })

}

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}