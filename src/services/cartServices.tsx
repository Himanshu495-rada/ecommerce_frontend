import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

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

const token: string | null = localStorage.getItem("jwtToken");
const userId: string | null = localStorage.getItem("userId");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const cartServices = {
  getUserCart: async (): Promise<Cart> => {
    const response = await axios.get(`${baseURL}/cart/${userId}`, config);
    return response.data as Cart;
  },

  getCartItems: async (): Promise<CartItem[]> => {
    const response = await axios.get(`${baseURL}/cart/${userId}/items`, config);
    return response.data as CartItem[];
  },

  addToCart: async (quantity: number, productId: number): Promise<boolean> => {
    const form_config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("userId", userId?.toString());
    formData.append("productId", productId.toString());
    formData.append("quantity", quantity.toString());
    const response = await axios.post(
      `${baseURL}/cart/add`,
      formData,
      form_config
    );
    if (response.status == 200) {
      return true;
    } else {
      return false;
    }
  },

  updateCartItemQuantity: async (formData: FormData): Promise<boolean> => {
    const response = await axios.put(
      `${baseURL}/cart/update`,
      formData,
      config
    );
    console.log(response);
    if (response.status == 200) {
      return true;
    } else {
      return false;
    }
  },

  removeCartItem: async (cartItemId: number): Promise<boolean> => {
    const response = await axios.delete(
      `${baseURL}/cart/${cartItemId}`,
      config
    );
    console.log(response);
    if (response.status == 204) {
      return true;
    } else {
      return false;
    }
  },
};

export default cartServices;
