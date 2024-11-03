import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../store/actions/movieActions';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching movies: {error}</p>}
      <div className="movies-grid">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
