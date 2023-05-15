import React
 from "react";

 
 const Todolist =(props)=>{


        return(
        
       <div className="ror" >
       <i  onClick={()=>props.onSelect(props.id)} class="fa-solid fa-trash-can-arrow-up fa-flip fa-sm"></i>
       
       
       
              <li>{props.text}</li>
             </div>
        );
 }
 export default Todolist