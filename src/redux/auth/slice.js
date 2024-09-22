import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./thunk";

const initialState = {
  user: { email: null, name: null },
  token: null,
  isLoggedIn: null,
  isRefreshing: null,
  isLoading: false,
  error: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = {};
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
