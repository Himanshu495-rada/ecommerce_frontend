import axios from "axios";

interface Category {
  categoryId: number;
  categoryName: string;
}

const baseURL = import.meta.env.VITE_BACKEND_URL;
const token: string | null = localStorage.getItem("jwtToken");
const userId: string | null = localStorage.getItem("userId");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const formConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
};

const categoryServices = {
  getCategories: async (): Promise<Category[]> => {
    const response = await axios.get(`${baseURL}/category`);
    return response.data as Category[];
  },

  addCategory: async (categoryName: string): Promise<Category> => {
    const data = new FormData();
    data.append("categoryName", categoryName);
    const response = await axios.post(`${baseURL}/category`, data, formConfig);
    return response.data as Category;
  },

  deleteCategory: async (categoryId: number): Promise<boolean> => {
    const response = await axios.delete(
      `${baseURL}/category/${categoryId}`,
      config
    );
    if (response.status == 204) {
      return true;
    } else {
      return false;
    }
  },
};

export default categoryServices;
