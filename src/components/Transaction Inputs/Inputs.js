import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import "./Inputs.css"

export default function Inputs() {
    const [DESCRIPTION, setDESCRIPTION] = useState();
    const [Amount, setAmount] = useState();

    const { addTransaction}=useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction={
            id: new Date().getTime(),
            DESCRIPTION,
            Amount: +Amount
        }
        addTransaction(newTransaction);
    }

    return (
        <div className="Inputs-sec">
        <div className="container1">
            <h3>Add New Expenditure</h3>
        </div>
        {/* <div className="container"> */}
        <form onSubmit={onSubmit}>
            <label><b>Description</b></label>  <br/>
            <input type="text" placeholder="Add Description" className="form-control" value={DESCRIPTION} onChange={(event)=>{setDESCRIPTION(event.target.value)}}></input>                                                   
            <br/>
                <label><b>Amount</b></label>
            <br />
            <input type="number" placeholder="Enter Amount" className="form-control" value={Amount} onChange={(event)=>setAmount(event.target.value)} ></input>
            <br />
            <button type="submit" className="btn btn-primary form-control">Add Expenditure</button>
        {/* </div> */}
            </form>
        </div>
    )
}
