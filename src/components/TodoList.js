import React from "react";
import TodoCard from "./TodoCard";
import "./style/TodoInput.css"


export default function TodoList(props){
    const {array, deleteTodo, replaceTodo} = props
    console.log('array1', array)
    return (
        <div className="todo_list">
         {array.map((value, index)=>(
           <TodoCard deleteTodo= {deleteTodo} replaceTodo={replaceTodo} key={index} index={index}>{value}</TodoCard>
        ))} 
        </div>
    )
}