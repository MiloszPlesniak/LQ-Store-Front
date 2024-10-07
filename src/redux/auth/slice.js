import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logOut, loginUser, refreshUser } from "./thunk";

const initialState = {
  user: {},
  userId: null,
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
        console.log(payload);
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.logedUser.message;
        state.userId = payload.logedUser.message._id;
        state.isLoggedIn = true;
        state.error = {};
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.logedUser.message;
        state.userId = payload.logedUser.message._id;
        state.isLoggedIn = true;
        state.error = {};
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.error = payload;
      })
      .addCase(logOut.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = null;
        state.isRefreshing = null;
        state.isLoading = false;
        state.error = {};
        // state = initialState;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.userId = payload.user._id;
        state.isLoading = false;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = {};
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = payload.response;
      });
  },
});

export default authSlice.reducer;
