import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import Quizes from "./Quizes";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

export const rootReducer = combineReducers({
  Quizes: Quizes,
});

const logger = createLogger();
const Quizstore = createStore(rootReducer, applyMiddleware(thunk, logger));
export default Quizstore;
