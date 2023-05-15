import React, { useState } from "react";
import Todolist from "./Todolist";
 export default function Todo(){
    const[inputlist, setinputlist]= useState("");
    const[items, setitems]= useState([]);

 const itemoo= ()=>{
    setitems((olditem) =>{
        return [...olditem,  inputlist]

    })
 }
 const del=  (id)=>{
    prompt("want to delete")
    setitems((olditem)=>{
        return olditem.filter((arr, ind)=>{
 return ind!==id;
        })
    })


}


const item=( event)=>{
    setinputlist(event.target.value);
    
}
    return(

        <dir className = "main" >
            <div className="list"> Todo  List
            <br />
            
            <input onChange={item} type="text" />
            <br />
            <button className="bu" onClick={itemoo}>ADD</button>
<ol>
   
  { items.map( (itemv , index)=>{ 
  return <Todolist 
key ={index}
id={index}
onSelect={del}
   text = {itemv}/>  


   } )
 }

</ol>

            </div>
        </dir>
    );
}