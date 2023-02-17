import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import wordReducer from "./currentWordSlice";
import checkWordReducer from "./checkWordSlice";

const store = configureStore({
    reducer: {

        game: gameReducer,
        currentWord: wordReducer,
        error: checkWordReducer

    }
});

export default store;