import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import movieReducer from './reducers/movieReducer';
import authReducer from './reducers/authReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

