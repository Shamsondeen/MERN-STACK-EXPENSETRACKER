import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransc = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }
    return (
        <React.Fragment>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Expense Title" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"> Amount <br/> (negative - expense, positive - income</label>
                    <input type="number" id="amount" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </React.Fragment>
    )
}
