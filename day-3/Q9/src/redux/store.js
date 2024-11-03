import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { coffeeReducer } from './reducers/coffeeReducer';
import { thunk } from 'redux-thunk';

// Combine thunk and logger middleware
const middleware = [thunk, logger];

// Create store with reducer and middleware
const store = createStore(
  coffeeReducer,
  applyMiddleware(...middleware)
);

export default store;
