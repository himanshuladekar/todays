import axios from 'axios';

const API_KEY = '5540e483a20e0b20354dabc2d66a31c9'; // Get this key from TMDB

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

// Fetch movies by search
export const searchMovies = (query) =>
  api.get('/search/movie', {
    params: { query },
  });

// Fetch popular movies
export const getPopularMovies = () => api.get('/movie/popular');
