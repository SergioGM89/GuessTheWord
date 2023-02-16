import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: [false, false, false, false, false],
    contain: ["", "", "", "", ""]
}

function showSelected(state, action) {
    [...state.selected] = initialState.selected;
    state.selected[action.payload] = true;
    // action.payload?.event.classList.add("selected");
}

function showContain(state, action) {
    let positionLetter = state.selected.findIndex((el) => el === true);
    state.contain[positionLetter] = action.payload;
}

const wordSlice = createSlice({
    name: 'currentWord',
    initialState,
    reducers: {
        selected: showSelected,
        contain: showContain
    }
})

export const { selected, contain } = wordSlice.actions;
export default wordSlice.reducer;