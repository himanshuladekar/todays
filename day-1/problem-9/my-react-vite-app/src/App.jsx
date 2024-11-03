import { useReducer, useState } from 'react';
import './App.css';
// 1. Define the initial state
const initialState = {
  email: '',
  password: '',
};

// 2. Define the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL':
      return { ...state, email: action.payload };
    case 'PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

function App() {
  // 3. Initialize useReducer with reducer function and initial state
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  // 4. A flag to manage form submission state
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Handle reset functionality
  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setSubmitted(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Form Application</h1>
      
      {/* Form with email and password fields */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'PASSWORD', payload: e.target.value })}
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
        <button type="button" onClick={handleReset} style={buttonStyle}>Reset</button>
      </form>

      {/* 5. Conditionally render the data or "No details found" */}
      {submitted ? (
        <div>
          <h3>User Details:</h3>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </div>
  );
}

// Optional styling for buttons
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '10px',
  cursor: 'pointer',
};

export default App;
