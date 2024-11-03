// src/reducer.js

import { INCREMENT, DECREMENT } from './actions';

// Initial State
const initialState = {
  counter: 0,
};

// Reducer Function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
