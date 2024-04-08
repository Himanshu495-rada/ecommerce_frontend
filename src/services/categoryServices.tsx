import axios from "axios";

interface Category {
  categoryId: number;
  categoryName: string;
}

const baseURL = import.meta.env.VITE_BACKEND_URL;

const categoryServices = {
  getCategories: async (): Promise<Category[]> => {
    const response = await axios.get(`${baseURL}/category`);
    return response.data as Category[];
  },
};

export default categoryServices;
