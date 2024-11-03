// src/store.js

import { createStore } from 'redux';
import todoReducer from './reducer';

// Create the Redux store
const store = createStore(todoReducer);

export default store;
