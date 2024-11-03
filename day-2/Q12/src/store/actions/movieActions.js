import { getPopularMovies, searchMovies } from '../../api/tmdb';

// Fetch popular movies
export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POPULAR_MOVIES' });
  try {
    const response = await getPopularMovies();
    dispatch({ type: 'FETCH_POPULAR_MOVIES_SUCCESS', payload: response.data.results });
  } catch (error) {
    dispatch({ type: 'FETCH_POPULAR_MOVIES_FAILURE', payload: error.message });
  }
};

// Search movies by query
export const searchForMovies = (query) => async (dispatch) => {
  try {
    const response = await searchMovies(query);
    dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: response.data.results });
  } catch (error) {
    console.log('Error searching movies:', error);
  }
};
