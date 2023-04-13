import getLocalStorage from '../utils/getLocalStorage.js';

const USER_FETCH_STARTED = 'user/FETCH_STARTED';
const USER_FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const USER_FETCH_ERROR = 'user/FETCH_ERROR';

export const userFetchStarted = () => ({ type: USER_FETCH_STARTED });
export const userFetchSuccess = (payload) => ({ type: USER_FETCH_SUCCESS, payload });
export const userFetchError = (payload) => ({ type: USER_FETCH_ERROR, payload });

const initialState = {
    loading: false,
    error: false,
    data: null,
    localStorage: getLocalStorage('data', null),
};

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case USER_FETCH_STARTED :
            return state.loading = true;
        case USER_FETCH_SUCCESS:
            return { loading: false, data: action.payload, localStorage: 'data' };
        case USER_FETCH_ERROR:
            return { loading: false, data: null, error: action.payload };
    }
}, initialState);

export default reducer;