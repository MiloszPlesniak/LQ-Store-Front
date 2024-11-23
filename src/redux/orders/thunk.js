import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrdersList = createAsyncThunk(
  "orders/getOrdersList",
  async () => {
    try {
      const ordersList = await axios.get("http://localhost:3100/api/orders/");
      console.log(ordersList);

      return ordersList;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
