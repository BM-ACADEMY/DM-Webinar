import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Backend URL from .env
  timeout: 15000, // 45 seconds to avoid SMTP timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
