import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteProduct: (state, action) => {
       state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
   
    },
  },
}); 

export const cartReducer=cartSlice.reducer
export const {addToCart, deleteProduct} =cartSlice.actions