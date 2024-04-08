import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import productServices from "../services/productServices";

interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  remainingQuantity: number;
  category: {
    categoryId: number;
    categoryName: string;
  };
  user: {
    userId: number;
    username: string;
    name: string;
    role: {
      roleId: number;
      roleName: string;
    };
  };
}

const initialState: {
  products: Product[];
  loading: boolean;
  error: string | null;
} = {
  products: [],
  loading: false,
  error: null,
};

// Function to fetch products from an API
export const fetchProducts = createAsyncThunk<Product[]>(
  "fetchProducts",
  async () => {
    const data = await productServices.getAllProducts();
    return data as Product[];
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
