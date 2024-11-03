import { useReducer } from 'react';
import './App.css';
// 1. Initial state and reducer function
const initialState = { theme: 'light' };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

function App() {
  // 2. Using useReducer to manage theme state
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // 3. Toggling the theme by dispatching action
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // 4. Changing UI based on the theme
  const themeStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={themeStyles}>
      <h1>Current Theme: {state.theme}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme to {state.theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}

export default App;
