import { configureStore } from "@reduxjs/toolkit";
import { productsReducers } from "./slices/Products/productsSlice";
import { categoriesReducer } from "./slices/categories/categoriesSlice";

const store =configureStore({
    reducer:{
        categories:categoriesReducer,
        products:productsReducers
    }
})
export default store