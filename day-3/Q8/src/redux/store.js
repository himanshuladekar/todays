import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { userReducer } from './reducers/userReducer';
import { thunk } from 'redux-thunk';

// Custom Middleware to log action types
const actionTypeLogger = (store) => {
  return (action) => {
    console.log('Action Type:', action.type);
    return action; // Return action to proceed
  };
};

// Custom Middleware to log action payloads
const payloadLogger = (store) => {
  return (action) => {
    if (action.payload) {
      console.log('Action Payload:', action.payload);
    }
    return action; // Return action to proceed
  };
};

// Middleware function that applies custom middleware and thunk
const middleware = [thunk, actionTypeLogger, payloadLogger];

// Create Redux store
const store = createStore(
  userReducer,
  applyMiddleware(...middleware)
);

export default store;
