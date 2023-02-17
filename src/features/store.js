import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import wordReducer from "./wordSlice";

const store = configureStore({
    reducer: {
        game: gameReducer,
        currentWord: wordReducer
    }
});

export default store;