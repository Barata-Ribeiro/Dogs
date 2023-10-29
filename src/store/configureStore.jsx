import { combineReducers, configureStore } from "@reduxjs/toolkit";

const contador = () => 0;

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware()];
const reducer = combineReducers({ contador });
const store = configureStore({ reduce, middleware });

export default store;
