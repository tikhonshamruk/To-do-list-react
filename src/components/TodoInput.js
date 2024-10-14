import React from "react";
import "./style/TodoInput.css"

export default function TodoInput(props){

    const {changesArray, inputValue, setInputValue} = props;

   

    return (
        <div className="main_input">
          <div>
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
            }
            } className="input_todo" placeholder="Enter todo..."></input>
         </div>
        <div>
            <button onClick={()=>{
                changesArray(inputValue);
                setInputValue('');
            }} className="todo_button">Add</button>
        </div>
       
        </div>
    )
}