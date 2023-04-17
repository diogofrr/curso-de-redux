import { createSlice } from "@reduxjs/toolkit";

// JEITO NOVO
const slice = createSlice({
  name: 'contador',
  initialState: {
    total: 0,
  },
  reducers: {
    incrementar(state) {
      state.total++
    },
    reduzir(state) {
      state.total--
    },
  },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;

// JEITO ANTIGO
// function contador(state = 0, action) {
//     switch (action.type) {
//       case incrementar.type:    
//         return state + 1;
//       case reduzir.type:
//         return state -1;
//       default:
//         return state;
//     }
// }