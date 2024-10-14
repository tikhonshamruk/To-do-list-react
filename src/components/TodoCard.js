import React from "react";
import "./style/TodoInput.css"


export default function TodoCard(props){
    const {children, deleteTodo, index, replaceTodo} = props;
    return (
        <div className="icon">
            <div className="icon_child">
            {children}
            </div>
            <div >
                <button onClick={()=>{
                    replaceTodo(index);
                }}>
                <i className="fa-regular fa-pen-to-square"></i>
                </button>

               <button onClick={()=>{
                deleteTodo(index)
               }}>
               <i className="fa-solid fa-trash"></i>
               </button>
                
            </div>
        </div>
    )
}