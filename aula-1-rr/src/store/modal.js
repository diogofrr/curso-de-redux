import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        },
    },
});

export default  slice.reducer;
export const { openModal, closeModal } = slice.actions;