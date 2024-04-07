import axios from "axios";
import { toast } from "react-toastify";

// interface ProductData {
//   productName: string;
//   productDescription: string;
//   productPrice: number;
//   remainingQuantity: number;
//   user: {
//     userId: number;
//   };
//   category: {
//     categoryId: number;
//   };
//   image: File | null;
// }

const productServices = {
  addProduct: async (data: FormData, token: string): Promise<any> => {
    const response = await fetch("/api/products", {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token in Authorization header
      },
    });
    console.log(response);
  },
};

export default productServices;
