import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../keys/api";

export const fetchSearch = createAsyncThunk("", async (search, year, type) => {
    const response = await fetch(
        `${API.OMDB_URL}?apikey=${API.OMDB_API_KEY}&s=${search}`
    );
    const data = await response.json();
    return data.Search;
});

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.results = action.payload;
            })
            .addCase(fetchSearch.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default searchSlice.reducer;
