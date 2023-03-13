import { createSlice } from "@reduxjs/toolkit";
import wordFetch from "./checkWordThunks";

const initialState = {
    error: null,
    loading: false
}

function getValidWordPending(state) {
    console.log('pending');
    state.loading = true;
    state.error = "";
}

function getValidWordFulFilled(state, action) {
    console.log('fulfilled');
    state.loading = false;
}

function getValidWordRejected(state, action) {
    console.log('rejected');
    state.loading = false;
    state.error = action.error.message;
}

const checkWordSlice = createSlice({
    name: 'checkWord',
    initialState,
    reducers: {
    },
    extraReducers: {
        [wordFetch.pending]: getValidWordPending,
        [wordFetch.fulfilled]: getValidWordFulFilled,
        [wordFetch.rejected]: getValidWordRejected,
    }
})

export default checkWordSlice.reducer;