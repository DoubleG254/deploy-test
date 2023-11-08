import React from "react"

function Expense(expense){
    const[amount,name,category,date] = expense
    return(
        <div className="">
            <div>
               <div>
               <p>{date}</p>
                <p>{category}</p>
               </div>
               <p>{name}</p>
            </div>
            <div>
                <p>COST</p>
                <p>{amount}</p>
            </div>
        </div>
    )


}
export default Expense
