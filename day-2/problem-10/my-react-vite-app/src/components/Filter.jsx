// src/components/Filter.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Filter Books</h2>
      <select onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="ALL">All</option>
        <option value="READ">Read</option>
        <option value="UNREAD">Unread</option>
      </select>
    </div>
  );
};

export default Filter;
