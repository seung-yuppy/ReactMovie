import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import searchReducer from "./slice/searchSlice";

const persistMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem("isDarkMode", state.theme.isDarkMode);
    return result;
};

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistMiddleware),
});
