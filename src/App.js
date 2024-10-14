import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';




function App() {

  const [array, setArray] = useState(['wasch car', 'play futball', 'dance', 'go to school']);
  const [inputValue, setInputValue] = useState('');

  function changes(change){
    let todo = [...array, change]
    setArray(todo)
  }

  function deleteTodo(index){
    let newArray = array.filter((value, valueIndex)=>{
     return valueIndex !== index;
    })
    setArray(newArray);
  }

  function replaceTodo(index){
    let currentValue = array[index]
    setInputValue(currentValue)
    
    deleteTodo(index)
  }

  return (
    <div className="App">
      <div className='main'>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} changesArray={changes}></TodoInput>
      <TodoList deleteTodo={deleteTodo} replaceTodo={replaceTodo} array = {array}></TodoList>
      </div>
    </div>
  );
}

export default App;
