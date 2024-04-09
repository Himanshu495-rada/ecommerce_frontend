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

interface AddressResponse {
  addressDetail: string;
}

const token: string | null = localStorage.getItem("jwtToken");
const userId: string | null = localStorage.getItem("userId");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const userServices = {
  getUserInfo: async (): Promise<User> => {
    const response = await axios.get(`${baseURL}/user/${userId}`, config);
    return response.data as User;
  },

  getUserAddresses: async (): Promise<Address[]> => {
    const response = await axios.get(
      `${baseURL}/address?userId=${userId}`,
      config
    );
    return response.data as Address[];
  },

  addUserAddress: async (data: AddressResponse): Promise<Address> => {
    const response = await axios.post(
      `${baseURL}/address?userId=${userId}`,
      data,
      config
    );
    console.log(response);
    return response.data as Address;
  },

  deleteAddress: async (addressId: number): Promise<boolean> => {
    const response = await axios.delete(
      `${baseURL}/address/${addressId}`,
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

export default userServices;
