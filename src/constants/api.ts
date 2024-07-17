export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const Endpoints = {
  GET_ALL_BOOKS: `${API_BASE_URL}/api/v1/book/all?size=200`,
  GET_ALL_CATEGORIES: `${API_BASE_URL}/api/v1/book/category/all`,
  GET_SLIDER_BOOKS: `${API_BASE_URL}/api/v1/book/slider`,
  GET_BOOK_BY_ID: `${API_BASE_URL}/api/v1/book/findById/`,
  LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
  REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
  LOGOUT: `${API_BASE_URL}/api/v1/auth/logout`,
};

export const NP_API_BASE_URL = 'https://api.novaposhta.ua/v2.0/json/'