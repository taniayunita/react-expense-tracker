import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions: [
    {id: 1, text: 'flower', amount: -20},
    {id: 2, text: 'Salary', amount: 300},
    {id: 3, text: 'Book', amount: -10},
    {id: 4, text: 'Camera', amount: 150}
    ]
}

//create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer( AppReducer, initialState);

    //actions for delete transaction
    function deleteTransaction(id) {
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
        });
    }

    //add for delete transaction
    function addTransaction(transaction) {
        dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
        });
    }




    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)



}