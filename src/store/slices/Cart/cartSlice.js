import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  },
}); 

export const cartReducer=cartSlice.reducer
export const {addToCart, deleteProduct} =cartSlice.actions