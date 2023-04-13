import fetchToken from './api/fetchToken.js';
import store from './config/configStore.js';

console.log(store.getState());

const user = {
    username: 'dog',
    password: 'dog'
}

store.dispatch(fetchToken(user));

console.log(store.getState());
