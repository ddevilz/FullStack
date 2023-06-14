import React, { useState } from 'react';
import "./style.css";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [des, setDes] = useState('');

  const handleInputChange = (event) => {
    setDes(event.target.value);
  };

  

  const handleAddTodo = () => {
    if (inputValue.trim() !== '' && des.trim() !== ''){
      const setTodo = {title: inputValue, description: des}
      setTodos([...todos, setTodo])
      setInputValue('');
      setDes('');
    }
  }
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        className='input-box'
        type="text"
        value={inputValue}
        onChange={(e) => (setInputValue(e.target.value))}
        placeholder="Enter a todo"
      />
      <textarea
        className='input-box' 
        value={des}
        onChange={handleInputChange}
        placeholder='Give a description... '>

      </textarea>
      <button 
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <ul className='list-table'>
        {todos.map((todo, index) => (
          <li className='list' key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
