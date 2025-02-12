import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../keys/api";

export const getMainImdbId = createAsyncThunk(
    '',
    async (movieId, { rejectWithValue }) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `${API.TMDB_ACCESS_TOKEN}`,
                }
            };
            const response = await fetch(`${API.TMDB_URL}${movieId}}/external_ids`, options);
            const data = await response.json();
            console.log("id", { [movieId]: data.imdb_id });
            return { [movieId]: data.imdb_id };
        } catch (error) {
            return rejectWithValue("메인 영화 ID 불러오기 실패");
        }
    }
);

const getMainImdbIdSlice = createSlice({
    name: "getMainImdbId",
    initialState: {
        ids: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMainImdbId.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getMainImdbId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { movieId, imdbId } = action.payload;
                state.ids[movieId] = imdbId;
            })
            .addCase(getMainImdbId.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { actions } = getMainImdbIdSlice;
export default getMainImdbIdSlice.reducer;