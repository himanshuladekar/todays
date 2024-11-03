// src/App.jsx

import React from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Filter from './components/Filter';
import './App.css';
function App() {
  return (
    <div>
      <h1>Book Library</h1>
      <AddBook />
      <Filter />
      <BookList />
    </div>
  );
}

export default App;
