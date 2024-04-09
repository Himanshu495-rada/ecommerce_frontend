import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../services/cartServices";

interface User {
  userId: number;
  username: string;
  name: string;
  email: string;
  role: {
    roleId: number;
    roleName: string;
  };
}

interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  sellingPrice: number;
  remainingQuantity: number;
  image: string;
  category: {
    categoryId: number;
    categoryName: string;
  };
  user: User;
}

interface Cart {
  cartId: number;
  totalAmount: number;
  user: User;
}

interface CartItem {
  cartItemId: number;
  quantity: number;
  cart: Cart;
  product: Product;
}

const initialState: {
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
} = {
  cartItems: [],
  loading: false,
  error: null,
};

export const fetchCartItems = createAsyncThunk<CartItem[]>(
  "fetchCartItems",
  async () => {
    const data = await cartServices.getCartItems();
    return data as CartItem[];
  }
);

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
        state.error = "";
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.cartItems = [];
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default cartItemsSlice.reducer;
