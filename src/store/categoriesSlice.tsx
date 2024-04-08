import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryServices from "../services/categoryServices";

interface Category {
  categoryId: number;
  categoryName: string;
}

const initialState: {
  categories: Category[];
  loading: boolean;
  error: string | null;
} = {
  categories: [],
  loading: false,
  error: null,
};

// Function to fetch categories from an API
export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetchCategories",
  async () => {
    const response = await categoryServices.getCategories();
    return response as Category[];
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = "";
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.categories = [];
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

export default categoriesSlice.reducer;
