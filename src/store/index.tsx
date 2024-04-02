import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
