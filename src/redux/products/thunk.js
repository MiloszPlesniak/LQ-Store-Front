import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://localhost:3100/api/products/";

export const getProductsList = createAsyncThunk(
  "product/getProductsList",
  async (_, thunkAPI) => {
    try {
      const productsList = await axios.get(
        "http://localhost:3100/api/products/"
      ); //zapytanie o listę produktów
      return productsList;
    } catch (error) {
      console.log(error);
    }
  }
);
