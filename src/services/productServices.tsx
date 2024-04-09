import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

interface Category {
  categoryId: number;
  categoryName: string;
}

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
  category: Category;
  user: User;
}

const token: string | null = localStorage.getItem("jwtToken");
const userId: string | null = localStorage.getItem("userId");

const productServices = {
  addProduct: async (data: FormData): Promise<Product> => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(`${baseURL}/product`, data, config);
    //console.log(response);
    return response.data as Product;
  },

  getProductById: async (productId: string | undefined): Promise<Product> => {
    const response = await axios.get(`${baseURL}/product/${productId}`);
    return response.data as Product;
  },

  getAllProducts: async (): Promise<Product[]> => {
    const response = await axios.get(`${baseURL}/product`);
    return response.data as Product[];
  },

  getAllSellersProducts: async (): Promise<Product[]> => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${baseURL}/product/seller/${userId}`,
      config
    );
    //console.log(response);
    return response.data as Product[];
  },

  updateProduct: async (
    data: FormData,
    productId: number
  ): Promise<Product> => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.put(
      `${baseURL}/product/${productId}`,
      data,
      config
    );
    //console.log(response);
    return response.data as Product;
  },

  deleteProduct: async (productId: number): Promise<boolean> => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `${baseURL}/product/${productId}`,
      config
    );
    if (response.status == 204) return true;
    else return false;
  },
};

export default productServices;
