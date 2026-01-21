import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTopHeadlines } from "./articlesAPI";
import { DEFAULT_COUNTRY } from './../../utils/constants';

export const getTopHeadlines = createAsyncThunk(
    "articles/getTopHeadlines",
    async (params, { rejectWithValue }) => {
        try {
            return await fetchTopHeadlines(params);
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch news"
            );
        }
    }
);

const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        articles: [],
        status: "idle",
        error: null,
        country: DEFAULT_COUNTRY,
        page: 1,
        totalResults: 0,
    },
    reducers: {
        setCountry: (state, action) => {
            state.country = action.payload;
            state.page = 1;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopHeadlines.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getTopHeadlines.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.articles = action.payload.articles;
                state.totalResults = action.payload.totalResults;
            })
            .addCase(getTopHeadlines.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { setCountry, setPage } = articlesSlice.actions;
export default articlesSlice.reducer;