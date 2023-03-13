import { createSlice } from "@reduxjs/toolkit";
import idFetch from "./idThunks";

const initialState = {
    id: null,
    win: false,
    lose: false,
    error: null
}

function getIdPending(state) {
    console.log('pending');
    state.loading = true;
}

function getIdFulFilled(state, action) {
    console.log('fulfilled');
    state.loading = false;
    state.id = action.payload;
    console.log("id: " + state.id);
}

function getIdRejected(state, action) {
    console.log('rejected');
    state.loading = false;
    state.error = action.error.message;
    console.log(action.error);
    console.log(state.error);
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
    },
    extraReducers: {
        [idFetch.pending]: getIdPending,
        [idFetch.fulfilled]: getIdFulFilled,
        [idFetch.rejected]: getIdRejected,
    }
})

export default gameSlice.reducer;