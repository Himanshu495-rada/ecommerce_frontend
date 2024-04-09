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

interface Address {
  addressId: number;
  addressDetail: string;
  user: User;
}

interface Order {
  orderId: number;
  orderPrice: number;
  user: User;
  address: Address;
}

const token: string | null = localStorage.getItem("jwtToken");
const userId: string | null = localStorage.getItem("userId");
const formConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
};

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const orderServices = {
  placeOrder: async (addressId: number | null): Promise<boolean> => {
    const data = new FormData();
    data.append("userId", userId);
    data.append("addressId", addressId.toString());
    const response = await axios.post(`${baseURL}/order`, data, formConfig);
    console.log(response);
    if (response.status == 201) {
      return true;
    } else {
      return false;
    }
  },

  getUserOrders: async (): Promise<Order[]> => {
    const response = await axios.get(`${baseURL}/order/${userId}`, config);
    return response.data as Order[];
  },
};

export default orderServices;
