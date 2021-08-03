import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

const configureStore = (preloadedState = {}) => {
  // return createStore(rootReducer, preloadedState);
  return createStore(rootReducer, preloadedState, applyMiddleware(logger));
}

export default configureStore;
