import React,{useState,useEffect} from "react"
import Expense from "./expense"
function Expenses(){
    const[expenses,setExpenses]=useState([])

    useEffect(()=>{
        fetch()
        .then(resp=>resp.json)
        .then((data)=>{
            setExpenses(data)
        })
    })
    return(
        <div>
            {expenses.map((expense)=>(
                <Expense expense={expense}/>
            ))}
        </div>
    )
}

export default Expenses