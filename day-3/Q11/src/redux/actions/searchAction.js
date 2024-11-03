import axios from 'axios';
// import { FETCH_RESULTS, ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes';
const API_URL = 'https://www.googleapis.com/customsearch/v1';
const API_KEY = ''; // Insert your API key

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        key: API_KEY,
      },
    });
    dispatch({ type: FETCH_RESULTS, payload: response.data.items });
  } catch (error) {
    console.error('Error fetching search results', error);
  }
};

export const addFavorite = (item) => ({ type: ADD_FAVORITE, payload: item });

export const removeFavorite = (itemId) => ({ type: REMOVE_FAVORITE, payload: itemId });
