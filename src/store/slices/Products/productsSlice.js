import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "./productsThunk";
const initialState = {
  elements: [],
  selectedProduct: null,
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "ProductsSlice",
  initialState,
  reducers: {
    resetProduct(state) {
      state.selectedProduct = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.elements = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error.message || "there is error";
      state.loading = false;
    });

    // get product
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.error.message || "there is error";
      state.loading = false;
    });
  },
});
export const productsReducers = productsSlice.reducer;
export const { resetProduct, searchedProduct } =
  productsSlice.actions;
