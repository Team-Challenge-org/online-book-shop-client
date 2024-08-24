import axios from 'axios';
import { API_BASE_URL } from 'constants/api';
import Cookies from 'js-cookie';

const axiosConfig = axios.create({
  baseURL: 'https://online-book-shop-1.onrender.com', //replace with your BaseURL
  headers: {
    'Content-Type': 'application/json', // change according header type accordingly
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken'); // get stored access token
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // set in header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get('refreshToken');
      if (refreshToken) {
        try {
          const response = await axiosConfig.post(`${API_BASE_URL}/api/v1/refreshToken`, {
            refreshToken,
          });
          // don't use axious instance that already configured for refresh token api call
          const newAccessToken = response.data.accessToken;
          Cookies.set('accessToken', newAccessToken); //set new access token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest); //recall Api with new token
        } catch (error) {
          // Handle token refresh failure
          // mostly logout the user and re-authenticate by login again
        }
      }
    }
    return Promise.reject(error);
  },
);

export default axiosConfig;
