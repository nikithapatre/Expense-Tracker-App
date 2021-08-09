import React, {useState, useContext} from 'react'
import { GlobalContext} from "../context/GlobalState"; 

 function AddTransaction() {

const [text, setText] = useState(""); 
const [amount, setAmount] = useState(0)

 const { addTransaction } = useContext(GlobalContext) ;

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
        <>
            <h3 className="add-transaction">Add new transction</h3>
          
            <form onSubmit={onSubmit}>
            <div className="form-control"> 
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value) } className="input-text" placeholder="Enter text"></input>
            </div>
            
            <div className="form-control">
                 <label>Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="input-num" placeholder="Enter amount"></input>
           
            </div>
           
          <button  className="submit-btn">Add transaction</button>
          
         </form>

        </>    
    )
}


 export default AddTransaction; 