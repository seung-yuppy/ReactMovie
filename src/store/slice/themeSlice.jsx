import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        setIsDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { setIsDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
