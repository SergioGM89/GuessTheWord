import { createSlice } from "@reduxjs/toolkit";
import wordFetch from "./wordThunks";

const initialState = {
    error: null,
    loading: false
}

function getIdPending(state) {
    console.log('pending');
    state.loading = true;
    state.error = "";
}

function getIdFulFilled(state, action) {
    console.log('fulfilled');
    state.loading = false;
    // state.id = action.payload;
    // console.log("id: " + state.id);
}

function getIdRejected(state, action) {
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
        [wordFetch.pending]: getIdPending,
        [wordFetch.fulfilled]: getIdFulFilled,
        [wordFetch.rejected]: getIdRejected,
    }
})

export default checkWordSlice.reducer;