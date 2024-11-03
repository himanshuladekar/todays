// src/redux/actions/matchActions.js
export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SEARCH_MATCHES = 'SEARCH_MATCHES';
export const FILTER_MATCHES = 'FILTER_MATCHES';

export const fetchMatchesRequest = () => ({ type: FETCH_MATCHES_REQUEST });
export const fetchMatchesSuccess = (matches) => ({ type: FETCH_MATCHES_SUCCESS, payload: matches });
export const fetchMatchesFailure = (error) => ({ type: FETCH_MATCHES_FAILURE, payload: error });
export const toggleFavorite = (id) => ({ type: TOGGLE_FAVORITE, payload: id });
export const searchMatches = (query) => ({ type: SEARCH_MATCHES, payload: query });
export const filterMatches = (criteria) => ({ type: FILTER_MATCHES, payload: criteria });
