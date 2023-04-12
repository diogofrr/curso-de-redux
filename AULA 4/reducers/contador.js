// constants
const INCREMENTAR = 'contador/INCREMENTAR';
const DIMINUIR = 'contador/DIMINUIR';

// actions creators
export const incrementar = () => ({ type: INCREMENTAR });
export const diminuir = () => ({ type: DIMINUIR });

// initial state
const initialState = 0;

// reducer
const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case DIMINUIR:
            return state - 1;
    }
}, initialState);

export default reducer;