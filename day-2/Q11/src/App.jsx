// src/App.js
import React from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import MatchList from './components/matchList';
import './index.css'
const App = () => {
  return (
    <div>
      <h1>Football Match Tracker</h1>
      <SearchBar />
      <Filter />
      <MatchList />
    </div>
  );
};

export default App;
