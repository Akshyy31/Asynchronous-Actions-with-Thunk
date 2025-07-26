import { createStore, applyMiddleware } from "redux";
import ThunkReducer from "./ThunkReducer";
import { fetchProducts } from "./ThunkMiddileware";
import {thunk} from "redux-thunk";

const store = createStore(ThunkReducer, applyMiddleware(thunk));

export default store;
