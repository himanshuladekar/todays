const initialState = {
  user: null,
  darkMode: false,
  countries: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      throw new Error('Invalid action type');
  }
};

export { initialState, reducer };