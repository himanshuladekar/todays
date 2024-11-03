// src/components/AddBook.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && author && genre) {
      dispatch(addBook({ title, author, genre }));
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
};

export default AddBook;
