import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "../slices";

export const store = configureStore({
    reducer: {
        game: gameSlice.reducer,
    }
}); 