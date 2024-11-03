// src/components/MatchList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchesRequest, fetchMatchesSuccess, toggleFavorite } from '../redux/actions/matchActions';

const MatchList = () => {
  const dispatch = useDispatch();
  const { footballMatches, isLoading, isError, favorites, searchQuery, filter } = useSelector(state => state.matches);

  useEffect(() => {
    dispatch(fetchMatchesRequest());
    fetch('https://jsonmock.hackerrank.com/api/football_matches?page=2')
      .then(response => response.json())
      .then(data => dispatch(fetchMatchesSuccess(data.data)))
      .catch(error => dispatch(fetchMatchesFailure(error)));
  }, [dispatch]);

  const filteredMatches = footballMatches
    .filter(match => match.team1.toLowerCase().includes(searchQuery.toLowerCase()) || match.team2.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(match => {
      if (filter.competition && match.competition !== filter.competition) return false;
      if (filter.year && match.year !== filter.year) return false;
      return true;
    });

  const handleFavoriteToggle = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching matches</p>}
      {filteredMatches.map((match, index) => (
        <div key={index}>
          <h3>{match.team1} vs {match.team2}</h3>
          <p>{match.competition} - {match.year} - {match.round}</p>
          <p>{match.team1goals} - {match.team2goals}</p>
          <button onClick={() => handleFavoriteToggle(index)}>
            {favorites.includes(index) ? 'Unmark Favorite' : 'Mark Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
