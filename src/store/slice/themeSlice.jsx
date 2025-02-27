import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")),
    },
    reducers: {
        setIsDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { setIsDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
