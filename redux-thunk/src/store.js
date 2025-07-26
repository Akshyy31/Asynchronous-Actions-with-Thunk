import { createStore, applyMiddleware } from "redux";
import ThunkReducer from "./ThunkReducer";
import { thunk } from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  ThunkReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
