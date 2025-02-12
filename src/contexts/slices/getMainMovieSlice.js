import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../keys/api";

export const getMainMovie = createAsyncThunk(
    '',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API.TMDB_URL}now_playing?api_key=${API.TMDB_API_KEY}`);
            const data = await response.json();
            const movieDatas = data.results;
            console.log("movieDatas", movieDatas);
            return movieDatas;
        } catch (error) {
            return rejectWithValue("메인 영화 불러오기 실패");
        }
    }
);

const getMainMovieSlice = createSlice({
    name: "getMainMovies",
    initialState: {
        movies: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMainMovie.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getMainMovie.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(getMainMovie.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { actions } = getMainMovieSlice;
export default getMainMovieSlice.reducer;