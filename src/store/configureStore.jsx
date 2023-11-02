import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feed from "./feed";
import photo from "./photo";
import photoPost from "./photoPost";
import token from "./token";
import ui from "./ui";
import user from "./user";

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, photoPost, token, user, feed, ui });
const store = configureStore({ reducer, middleware });

export default store;
