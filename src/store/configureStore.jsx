import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photo from "./photo";

// const contador = () => 0;

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware()];
const reducer = combineReducers({ photo });
const store = configureStore({ reducer, middleware });

export default store;
