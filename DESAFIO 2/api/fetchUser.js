import fetchToken from './fetchToken.js';
import { userFetchStarted, userFetchSuccess, userFetchError } from '../reducers/user.js';
import { getLocalStorage } from '../utils/getLocalStorage.js';

function fetchUser(url) {
    return async (dispatch, getState) => {
        try {
            let token = getLocalStorage('token', null);

            if(token === null || token === undefined){
                fetchToken();
                token = getLocalStorage('token', null);
            }

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            dispatch(userFetchStarted());

            const response = await fetch(url, options);
            const json = await response.json();

            dispatch(userFetchSuccess(json));
        } catch (error) {
            dispatch(userFetchError(error.message));
        }
    }
}


export default fetchUser;