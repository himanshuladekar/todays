import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import searchReducer from './reducers/searchReducer';

const logger = createLogger();

const store = createStore(
  searchReducer,
  applyMiddleware(thunk, logger) // Applying Thunk and Logger
);

export default store;
