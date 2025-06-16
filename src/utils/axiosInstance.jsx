import Axios from "axios";
import { API_URL } from "src/constants/config";
import { getAccessToken } from "src/utils/auth";

const axiosInstance = Axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

axiosInstance.interceptors.response.use((response) => response, 
// handleError
);

export default axiosInstance;
