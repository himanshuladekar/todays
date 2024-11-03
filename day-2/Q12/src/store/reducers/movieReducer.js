const initialState = {
    popularMovies: [],
    searchResults: [],
    loading: false,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POPULAR_MOVIES':
        return { ...state, loading: true };
      case 'FETCH_POPULAR_MOVIES_SUCCESS':
        return { ...state, loading: false, popularMovies: action.payload };
      case 'FETCH_POPULAR_MOVIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'SEARCH_MOVIES_SUCCESS':
        return { ...state, loading: false, searchResults: action.payload };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  