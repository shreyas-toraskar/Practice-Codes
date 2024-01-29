import { useState } from "react";

function Name(){
    let[name,setName]=useState("ABC");
    return(
        <div>
            <h1>My Name Is :{name}</h1> 
            <button onClick={()=>setName("ABC EFG HIJ")}>Click Here To Get Full Name</button>
        </div>
    )
}

export default Name;