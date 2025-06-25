import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_,{rejectWithValue}) => {
try { const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;}
    catch(error){
      return rejectWithValue(error.message)
    }
  }
);
