import { FETCH_RESULTS, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/actionTypes';

const initialState = {
  results: [],
  favorites: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULTS:
      return { ...state, results: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

export default searchReducer;
