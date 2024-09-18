import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./thunk";

const initialState = {
  user: { email: null, name: null },
  token: null,
  isLoggedIn: null,
  isRefreshing: null,
  error: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  
});

export default authSlice.reducer;
