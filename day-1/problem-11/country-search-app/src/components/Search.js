import React, { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.first.org/data/v1/countries?q=${query}`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
    setLoading(false);
  };

  const debounceFetch = debounce(fetchCountries, 500);

  useEffect(() => {
    if (query) debounceFetch(query);
  }, [query]);

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((country) => (
          <li key={country.country}>{country.country}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;