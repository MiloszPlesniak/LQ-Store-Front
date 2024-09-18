import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

axios.defaults.baseURL = "http://localhost:3100/api/";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post("users/register", credential);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
);
