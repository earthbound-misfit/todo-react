import React, {useState, useRef} from 'react'
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const addRef = useRef()

  function addTodo(event) {
    const taskName = addRef.current.value
    if (taskName) {
      setTodos(oldTodos => {
        return [...oldTodos, {id: uuidv4(), name: taskName, isComplete: false}]
      })
      addRef.current.value = null
    } else {
      return null
    }
  }

  function checkBox(id) {
    const newStuff = [...todos]
    const todo = newStuff.find(specificItem => specificItem.id === id)
    todo.isComplete = !todo.isComplete
    setTodos(newStuff)
  }

  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.isComplete)
    setTodos(newTodos)
  }

  return (
    <>

  
    <div className="flex-column margin-top">
      <div className="flex-row">
        <h4>To Do or Not To Do...</h4>
      </div>
      <div className="todo-list">
      <TodoList todos={todos} checkBox={checkBox}/>
    </div>
    </div>
    <div className="flex-column">
      <input className="padding-20 margin-10" ref={addRef} type="text"></input>
      <button className="padding-10 margin-10" onClick={addTodo}>Add Item</button>
    </div>
    <div className="flex-column">
    <button className="padding-10 margin-10" onClick={clearTodos}>Clear Completed</button>
    <small className="padding-10 left-to-do">Left to do: {todos.length}</small>
    </div>
    </>
  );
}

export default App;
