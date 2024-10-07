import { createSlice } from "@reduxjs/toolkit";
import { getProductsList } from "./thunk";

const initialState = {
  productList: [],
  isLoading: null,
  error: {},
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (buider) => {
    buider
      .addCase(getProductsList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getProductsList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getProductsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.productList = payload.data;
      });
  },
});
export default productsSlice.reducer;
// przy każdym wejsciu na mena bedzie pobierana lista produktów
