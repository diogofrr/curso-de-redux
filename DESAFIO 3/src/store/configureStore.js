import { combineReducers, configureStore } from "@reduxjs/toolkit";

import login from './reducers/login';

const reducer = combineReducers({ login });
const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat();

const store = configureStore({ reducer, middleware });

export default store;