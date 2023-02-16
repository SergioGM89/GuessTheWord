import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./GameIdSlice";
import wordReducer from "./wordSlice";

const store = configureStore({
    reducer: {
        gameId: idReducer,
        currentWord: wordReducer
    }
});

export default store;