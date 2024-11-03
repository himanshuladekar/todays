// src/redux/reducers/matchReducer.js
import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE,
    TOGGLE_FAVORITE,
    SEARCH_MATCHES,
    FILTER_MATCHES,
  } from '../actions/matchActions';
  
  const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
    favorites: [],
    searchQuery: '',
    filter: {},
  };
  
  const matchReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MATCHES_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case FETCH_MATCHES_SUCCESS:
        return { ...state, isLoading: false, footballMatches: action.payload };
      case FETCH_MATCHES_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case TOGGLE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.includes(action.payload)
            ? state.favorites.filter(id => id !== action.payload)
            : [...state.favorites, action.payload]
        };
      case SEARCH_MATCHES:
        return { ...state, searchQuery: action.payload };
      case FILTER_MATCHES:
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default matchReducer;
  