import { tokenFetchStarted, tokenFetchSuccess, tokenFetchError } from '../reducers/token.js';

function fetchToken(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(tokenFetchStarted());
            
            const tokenOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            };
    
            const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', tokenOptions);
            const { token } = await response.json();

            dispatch(tokenFetchSuccess(token));
        } catch (error) {
            dispatch(tokenFetchError(error.message));
        }
    }
}

export default fetchToken;