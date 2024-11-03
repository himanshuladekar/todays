import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoffee } from '../thunk/fetchCoffeeThunk';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    const sortOrder = event.target.value;
    dispatch(fetchCoffee(sortOrder)); // Fetch coffee based on selected sort order
  };

  return (
    <div className="sidebar">
      <h3>Sort By Price</h3>
      <select onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sidebar;
