import React, {useContext} from 'react' ;
import { GlobalContext} from "../context/GlobalState"; 
import Transaction from "./Transaction" ;

function TransactionList() {

  const {transactions} = useContext(GlobalContext); 
  
    
    return (
       <>
           <h3 className="history">History</h3>
           <ul id="list" className="list">
           {transactions.map(transaction => ( 
               <Transaction key={transaction.id} transaction={transaction} />

                
           ))}
               

        

           </ul>
       </>
    )
}


export default TransactionList; 