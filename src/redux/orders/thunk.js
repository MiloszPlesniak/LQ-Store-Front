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
export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (orderList) => {
    try {
      const order = await axios.post(
        "http://localhost:3100/api/orders/",
        orderList
      );
      return order;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
