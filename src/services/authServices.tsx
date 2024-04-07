import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_BACKEND_URL; // Replace with your API endpoint

interface LoginData {
  usernameOrEmail: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface ApiResponse {
  accessToken: string;
}

const authServices = {
  login: async (data: LoginData): Promise<boolean> => {
    try {
      const response = await axios.post(`${baseURL}/user/login`, data);
      if (response.data.accessToken) {
        localStorage.setItem("jwtToken", response.data.accessToken);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("role", response.data.role);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error while login");
      return false;
    }
  },

  signup: async (data: SignupData): Promise<undefined> => {
    await axios
      .post(`${baseURL}/user/signup`, data)
      .then((response): any => toast(response.data))
      .catch((error) => {
        if (error.response.data.details == "email already registered") {
          toast("Email already exists 😒");
        } else if (error.response.data.details == "Username already used") {
          toast("Username already used 😒");
        }
      });
  },

  logout: async (): Promise<boolean> => {
    try {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  },
};

export default authServices;
