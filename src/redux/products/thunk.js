import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  try {
    const url = "http://localhost:3100/api/products/" + id;
    const product = await axios.get(url); // zapytanie o konkretny produkt

    return product;
  } catch (error) {}
});
