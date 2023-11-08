import React from "react"
function Menu(){
    return(
        <div className="bg-blue-900 p-4 w-52 m-4 p-4 border-rounded">
            <h1 className="">LATTO EXPENSE TRACKER</h1>
             <button className="border-rounded active:bg-blue-950 text-cyan-400 p-4">HOME</button>
             <button className="border-rounded active:bg-blue-700 text-cyan-400 p-4">ANALYSIS</button>
             <br/><br/><br/><br/><br/><br/>
             <button className="bg-cyan-400 rounded-md p-2">ADD EXPENSE</button>
             
        </div>
    )
}

export default Menu