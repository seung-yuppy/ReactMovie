import { configureStore } from "@reduxjs/toolkit";
import getMainMoiveReducer from "./slices/getMainMovieSlice";
import getMainImdbIdReducer from "./slices/getMainImdbIdSlice";

export const store = configureStore({
    reducer: {
        getMainMovies: getMainMoiveReducer,
        getMainImdbId: getMainImdbIdReducer,
    }
});