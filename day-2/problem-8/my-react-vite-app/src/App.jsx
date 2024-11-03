// src/App.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';
function App() {
  // Access state from the store
  const counter = useSelector((state) => state.counter);

  // Dispatch actions to the store
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* Display the state in stringified format */}
      <p>{JSON.stringify({ counter })}</p>
    </div>
  );
}

export default App;
