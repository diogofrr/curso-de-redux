import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
import login from './login';

// import logger from '../middlewares/logger';
import localStorage from '../middlewares/localStorage';

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage);

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({ reducer, middleware })

export default store;