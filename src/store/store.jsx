import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";

const persistMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem("isDarkMode", state.theme.isDarkMode);
    return result;
};

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistMiddleware),
});
