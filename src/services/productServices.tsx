import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_BACKEND_URL;

// "productId": 3,
//         "productName": "samsung a53",
//         "productDescription": "latest 5g smartphone",
//         "productPrice": 32000.0,
//         "sellingPrice": 0.0,
//         "remainingQuantity": 100,
//         "image": null,
//         "category": {
//             "categoryId": 1,
//             "categoryName": "smartphone"
//         },
//         "user": {
//             "userId": 3,
//             "username": "anand69",
//             "password": "$2a$10$vzYBhU8wPuXPzGoZFW88yuA/M2YJbW24MjlwGzBrDjhyfwomaWOJe",
//             "name": "Anand",
//             "email": "anand@gmail.com",
//             "role": {
//                 "roleId": 2,
//                 "roleName": "ROLE_SELLER"
//             }
//         }

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
  user: {
    userId: number;
    username: string;
    name: string;
    email: string;
    role: {
      roleId: number;
      roleName: string;
    };
  };
}

const productServices = {
  addProduct: async (data, token: string): Promise<Product> => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(`${baseURL}/product`, data, config);
    console.log(response);
    return response.data as Product;
  },

  getAllProducts: async (): Promise<Product[]> => {
    const response = await axios.get(`${baseURL}/product`);
    return response.data as Product[];
  },
};

export default productServices;
