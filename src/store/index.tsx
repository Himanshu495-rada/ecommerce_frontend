import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import cartItemsReducer from "./cartItemsSlice";
import categoryReducer from "./categorySlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cartItems: cartItemsReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
