import { useReducer } from 'react';
import './App.css';
// 1. Define the initial state
const initialState = { count: 0 };

// 2. Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  // 3. Initialize useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // 4. Dispatch actions on button clicks
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
    </div>
  );
}

// Optional inline styling for buttons
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '5px',
  cursor: 'pointer',
};

export default App;
