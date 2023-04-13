import getLocalStorage from '../utils/getLocalStorage.js';

const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';

export const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
export const tokenFetchSuccess = (payload) => ({ type: TOKEN_FETCH_SUCCESS, payload, localStorage: 'token' });
export const tokenFetchError = (payload) => ({ type: TOKEN_FETCH_ERROR, payload });

const initialState = {
    loading: false,
    error: false,
    data: null,
    localStorage: getLocalStorage('token', null),
};

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case TOKEN_FETCH_STARTED :
            return state.loading = true;
        case TOKEN_FETCH_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: false,
            }
        case TOKEN_FETCH_ERROR:
            return {
                data: null,
                loading: false,
                error: action.payload
            };
    }
}, initialState);

export default reducer;