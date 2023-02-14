import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./asyncSlice";

const store = configureStore({
    reducer: {
        nombre: idReducer
    }
});

export default store;