import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 0,
};

const ArticlesPageSlice = createSlice({
    name: 'articlespage',
    initialState,
    reducers: {
        nextStep(state) {
            state.step += 1;
        },
        prevStep(state) {
            state.step -= 1;
        },
    },
});

export const { nextStep, prevStep } = ArticlesPageSlice.actions;

export default ArticlesPageSlice.reducer;