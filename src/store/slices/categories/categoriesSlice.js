import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesThunk";
const initialState = {
  values: [],
  loading: false,
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.values = action.error.message;
    });
  },
  reducers: {
    resetProduct(state) {
      state.selectedProduct = null;
      state.loading = false;
      state.error = null;
    },
  },
});
export const categoriesReducer = categoriesSlice.reducer;
