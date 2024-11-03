// src/reducers.js

import { combineReducers } from 'redux';
import { ADD_BOOK, TOGGLE_READ, DELETE_BOOK, EDIT_BOOK, SET_FILTER } from './actions';

const initialBooksState = {
  books: [],
};

const initialFilterState = {
  filter: 'ALL',
};

// Books Reducer
const booksReducer = (state = initialBooksState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: Date.now(), read: false }],
      };

    case TOGGLE_READ:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, read: !book.read } : book
        ),
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? { ...book, ...action.payload.updatedDetails }
            : book
        ),
      };

    default:
      return state;
  }
};

// Filter Reducer
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  booksState: booksReducer,
  filterState: filterReducer,
});

export default rootReducer;
