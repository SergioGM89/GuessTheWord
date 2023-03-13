import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null
}


function saveSelected(state, action) {
    state.selected = action.payload;
}

function saveLetter(state, action) {
    if (state.selected === null) return;
    state.letters[state.selected] = action.payload;
    (firstLetterEmpty(state) === -1) ?
        state.selected = null : state.selected = firstLetterEmpty(state);
}

function removeLetter(state) {
    if (state.selected === null) {
        state.letters[state.letters.length - 1] = "";
    } else if (state.letters[state.selected] !== "") {
        state.letters[state.selected] = "";
    } else if (state.selected !== 0) {
        state.letters[state.selected - 1] = "";
    }
    state.selected = firstLetterEmpty(state);
}

const wordSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        press: saveSelected,
        letter: saveLetter,
        backspace: removeLetter
    }
})

export const { press, letter, backspace } = wordSlice.actions;
export default wordSlice.reducer;