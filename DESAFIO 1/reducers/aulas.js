const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO })
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const initialState = {
    curso: {
        id: 0,
        cursoCompleto: false,
        todasAulas: [{
            id: 0,
            aulaCompleta: false,
        },
        {
            id: 1,
            aulaCompleta: false,
        },
        {
            id: 2,
            aulaCompleta: true,
        },
        {
            id: 3,
            aulaCompleta: false,
        },
        {
            id: 4,
            aulaCompleta: true,
        },
        {
            id: 5,
            aulaCompleta: false,
        }]
    }
}

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case COMPLETAR_AULA:
            const index  = state.curso.todasAulas.findIndex((aula) => aula.id === action.payload);

            if(!isNaN(index) && state.curso.todasAulas[index]) state.curso.todasAulas[index].aulaCompleta = true;

            break;

        case COMPLETAR_CURSO:
            state.curso.cursoCompleto = true;
            state.curso.todasAulas.forEach(aula => aula.aulaCompleta = true);
            break;
            
        case RESETAR_CURSO:
            state.curso.cursoCompleto = false;
            state.curso.todasAulas.forEach(aula => aula.aulaCompleta = false);
            break;
    }
}, initialState);

export default reducer;