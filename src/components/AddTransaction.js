import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState();
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
            </form>
        </>
    )
}