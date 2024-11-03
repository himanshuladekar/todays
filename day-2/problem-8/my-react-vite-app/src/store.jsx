// src/store.js

import { createStore } from 'redux';
import counterReducer from './reducer';

// Create Redux Store
const store = createStore(counterReducer);

export default store;
