import { useReducer } from 'react';
import './App.css';
// 1. Define the initial state
const initialState = { isVisible: false };

// 2. Define the reducer function
const visibilityReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

function App() {
  // 3. Initialize useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  // 4. Dispatch the toggle visibility action on button click
  const toggleVisibility = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility} style={buttonStyle}>
        {state.isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {/* 5. Conditionally render the message */}
      {state.isVisible && <h1>Hello, World! my name is himanshu</h1>}
    </div>
  );
}

// Optional button styling
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  marginTop: '20px',
  cursor: 'pointer',
};

export default App;
