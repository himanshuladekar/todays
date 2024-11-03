// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMatches } from '../redux/actions/matchActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchMatches(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by team names, venue, or date"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
