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
      // console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.response)
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue("Email is already in use");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post("users/login", credential);
      // setAuthHeader() dodać
      return res;
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue("Validation error");
      }
      if (error.response.status === 403) {
        return thunkAPI.rejectWithValue("Incorrect email or password");
      }
      if (error.response.status === 404) {
        return thunkAPI.rejectWithValue("User with such email not found");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logOut = createAsyncThunk(
  "auth/logOut",
  async (userId, thunkAPI) => {
    try {
      const url = "users/logOut/" + userId;
      const res = await axios.post(url);
      clearAuthHeader();
      return res;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (userId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token; //ściezka do zmiany

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user, no token");
    }

    try {
      setAuthHeader(persistedToken);
      const url = "/users/current" + userId;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
