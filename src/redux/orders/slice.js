import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopingCart: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.shopingCart.push(payload);
    },
    deleteFromCart: (state, { payload }) => {
      state.shopingCart = state.shopingCart.filter(
        (product) => product.id !== payload.id
      );
    },
    clearCart: (state) => {
      state.shopingCart = [];
    },
  },
});
export const { addToCart, deleteFromCart, clearCart } = ordersSlice.actions;
export default ordersSlice.reducer;
