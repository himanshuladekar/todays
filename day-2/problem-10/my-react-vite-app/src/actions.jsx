// src/actions.js

// Action Types
export const ADD_BOOK = 'ADD_BOOK';
export const TOGGLE_READ = 'TOGGLE_READ';
export const DELETE_BOOK = 'DELETE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const SET_FILTER = 'SET_FILTER';

// Book Actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const toggleRead = (id) => ({
  type: TOGGLE_READ,
  payload: id,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const editBook = (id, updatedDetails) => ({
  type: EDIT_BOOK,
  payload: { id, updatedDetails },
});

// Filter Actions
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
