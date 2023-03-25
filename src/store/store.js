import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksReducer";

export const store = configureStore({
    reducer:{
        books: booksReducer,
    }
})