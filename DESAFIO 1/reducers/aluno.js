const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });

const initialState = {
    nome: "Diogo Ferreira",
    tempo: 120,
    email: ''
};

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case INCREMENTAR_TEMPO:
            state.tempo++;
            break;
        case REDUZIR_TEMPO:
            state.tempo--;
            break;
        case MODIFICAR_EMAIL:
            state.email = action.payload;
    }
}, initialState);

export default reducer;