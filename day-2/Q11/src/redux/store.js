// src/redux/reducers/index.js
import { applyMiddleware, combineReducers , legacy_createStore} from 'redux';
import matchReducer from './reducers/matchReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  matches: matchReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export default store;
