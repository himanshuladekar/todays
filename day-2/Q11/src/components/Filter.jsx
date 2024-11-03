// src/components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterMatches } from '../redux/actions/matchActions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(filterMatches({ [name]: value }));
  };

  return (
    <div>
      <label>
        Competition:
        <input type="text" name="competition" onChange={handleFilterChange} />
      </label>
      <label>
        Year:
        <input type="number" name="year" onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
