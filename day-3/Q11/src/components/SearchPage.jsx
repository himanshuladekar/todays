import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults , addFavorite, removeFavorite} from '../redux/actions/searchAction';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { results, favorites } = useSelector((state) => state);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(fetchSearchResults(query));
  };

  const toggleFavorite = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for something..."
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Search Results</h2>
      <div className="results">
        {results.map((result, idx) => (
          <div key={idx} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.snippet}</p>
            <a href={result.link}>Go to Link</a>
            <button onClick={() => toggleFavorite(result)}>
              {favorites.some((fav) => fav.id === result.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        ))}
      </div>

      <h2>Favorites</h2>
      <div className="favorites">
        {favorites.map((fav, idx) => (
          <div key={idx} className="favorite-item">
            <h3>{fav.title}</h3>
            <p>{fav.snippet}</p>
            <a href={fav.link}>Go to Link</a>
            <button onClick={() => toggleFavorite(fav)}>Unfavorite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
