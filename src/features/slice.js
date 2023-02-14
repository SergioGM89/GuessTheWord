import { createSlice } from "@reduxjs/toolkit";

function nameFunction1(state, action){
const {payload} = action;
}

function nameFunction2(state, action){
    
}


const nameSlice = createSlice({
    name: 'loquesea',
    initialState: {},
    reducers: {
        nameAction1: nameFunction1,
        nameAction2: nameFunction2
    }
})

export const { nameAction1, nameAction2} = nameSlice.actions;
export default nameSlice.reducer;