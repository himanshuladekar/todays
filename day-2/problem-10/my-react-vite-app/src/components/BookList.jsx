// src/components/BookList.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRead, deleteBook } from '../actions';

const BookList = () => {
  const books = useSelector((state) => state.booksState.books);
  const filter = useSelector((state) => state.filterState.filter);
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) => {
    if (filter === 'ALL') return true;
    if (filter === 'READ') return book.read;
    if (filter === 'UNREAD') return !book.read;
  });

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title} by {book.author}</h3>
            <p>Genre: {book.genre}</p>
            <p>Status: {book.read ? 'Read' : 'Unread'}</p>
            <button onClick={() => dispatch(toggleRead(book.id))}>
              {book.read ? 'Mark as Unread' : 'Mark as Read'}
            </button>
            <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
