import token from '../reducers/token.js';
import user from '../reducers/user.js';

import thunk from '../middlewares/thunk.js';
import localStorage from '../middlewares/localStorage.js';

const { applyMiddleware, compose, combineReducers, createStore } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token, user });
const store = createStore(reducer, enhancer);


export default store;