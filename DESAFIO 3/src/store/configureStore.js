import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import logger from '../middlewares/logger';
import localStorage from '../middlewares/localStorage';

import login from './reducers/login';
import photos from './reducers/photos';

const reducer = combineReducers({login, photos});
const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(localStorage);
};

const store = configureStore({reducer, middleware});

export default store;
