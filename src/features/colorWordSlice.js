import { createSlice } from "@reduxjs/toolkit";
import wordColorFetch from "./colorWordThunks";

const initialState = {
    error: null,
    loading: false
}

function getColorWordPending(state) {
    console.log('pending');
    state.loading = true;
    state.error = "";
}

function getColorWordFulFilled(state, action) {
    console.log('fulfilled');
    state.loading = false;
}

function getColorWordRejected(state, action) {
    console.log('rejected');
    state.loading = false;
    state.error = action.error.message;
}

const colorWordSlice = createSlice({
    name: 'colorkWord',
    initialState,
    reducers: {
    },
    extraReducers: {
        [wordColorFetch.pending]: getColorWordPending,
        [wordColorFetch.fulfilled]: getColorWordFulFilled,
        [wordColorFetch.rejected]: getColorWordRejected,
    }
})

export default colorWordSlice.reducer;