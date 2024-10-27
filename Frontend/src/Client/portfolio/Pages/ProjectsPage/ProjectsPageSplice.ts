import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 0,
};

const ProjectsPageSlice = createSlice({
    name: 'projectspage',
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

export const { nextStep, prevStep } = ProjectsPageSlice.actions;

export default ProjectsPageSlice.reducer;