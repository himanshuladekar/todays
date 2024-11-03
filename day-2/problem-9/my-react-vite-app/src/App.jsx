// src/App.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import'./App.css';
function App() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // Add Todo
  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle(''); // Clear the input
    }
  };

  // Toggle Todo Status
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Todo List</h1>

      {/* Add Todo Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
            {todo.title}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.status ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
