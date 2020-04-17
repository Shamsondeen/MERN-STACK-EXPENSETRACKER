import React, { useContext, useEffect } from 'react';
import {Transc} from './Transc'
import {GlobalContext} from '../context/GlobalState';

export const TranscList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list" id="list">
                {transactions.map(transaction => (<Transc key={transaction.id} transaction={transaction}/>))}
               
            </ul>
        </React.Fragment>
    )
}
