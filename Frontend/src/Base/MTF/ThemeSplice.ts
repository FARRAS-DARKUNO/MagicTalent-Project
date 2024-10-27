import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    Theme: 'seaweed',
};

const ThemeSplice = createSlice({
    name: 'ThemeSplice',
    initialState,
    reducers: {
        chnageTheme(state, action: PayloadAction<string>) {
            state.Theme = action.payload;
        }
    },
});

export const { chnageTheme } = ThemeSplice.actions;

export default ThemeSplice.reducer;