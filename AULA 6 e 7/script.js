const getLocalStorage = (key, initial) => {
    try {
        return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
        return initial;
    }
}

const initialState = {
    loading: false,
    data: getLocalStorage('data', null),
    error: null,
    localStorage: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_STARTED':
            return {...state, loading: true};
        
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: null };

        case 'FETCH_ERROR':
            return { loading: false, data: null, error: action.payload} ;

        default:
            return state;
    }
}

const thunk = store => next => action => {
    if(typeof action === 'function'){
        return action(store.dispatch, store.getState);
    }

    return next(action);
}

const localStorage = store => next => action => {
    const result = next(action);

    console.log(action);
    if(action.localStorage !== undefined){
        window.localStorage.setItem(action.localStorage,
            JSON.stringify(action.payload));
    }
    return result;
}

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const store = Redux.createStore(reducer, enhancer);

function fetchUrl(url) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: 'FETCH_STARTED' });

            const data = await fetch(url).then(r => r.json());
            dispatch({ type: 'FETCH_SUCCESS', payload: data, localStorage: 'data' })
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message })
        }
    }
}

const state = store.getState();

if(state.data === null){
    store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
}
