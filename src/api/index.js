import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://task-manager-server-psi-three.vercel.app",

  withCredentials: true,
});

export default axiosInstance;
