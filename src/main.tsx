import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import store from "./store";
import { fetchProducts } from "./store/productsSlice";
import { fetchCategories } from "./store/categoriesSlice";
import Product from "./pages/Product/Product";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import Wishlist from "./pages/Wishlist/Wishlist";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Billing from "./pages/Billing/Billing";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { fetchCartItems } from "./store/cartItemsSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:product_id",
    element: <Product />,
  },
  {
    path: "/track_order",
    element: <TrackOrder />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/shopping_cart",
    element: <ShoppingCart />,
  },
  {
    path: "/shopping_cart/billing",
    element: <Billing />,
  },
  {
    path: "/user_dashboard",
    element: <UserDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

const getData = async () => {
  await store.dispatch(fetchProducts());
  await store.dispatch(fetchCategories());
  await store.dispatch(fetchCartItems());
};

getData();
