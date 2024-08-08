export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const Endpoints = {
  // books
  GET_ALL_BOOKS: `${API_BASE_URL}/api/v1/book/all?size=200`,
  GET_BOOK_BY_ID: `${API_BASE_URL}/api/v1/book/findById/`,
  GET_SLIDER_BOOKS: `${API_BASE_URL}/api/v1/book/slider`,
  GET_ALL_CATEGORIES: `${API_BASE_URL}/api/v1/book/category/all`,

  // user
  LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
  OAUTH: `${API_BASE_URL}/api/v1/auth/oauth2/success`,
  REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
  LOGOUT: `${API_BASE_URL}/api/v1/auth/logout`,

  CHECK_EMAIL: `${API_BASE_URL}/api/v1/user/resetPassword`,
  RESET_PASSWORD: `${API_BASE_URL}/api/v1/user/savePassword`,

  // user shopping cart
  CREATE_CART: `${API_BASE_URL}/api/v1/cart/create`,
  GET_CART_BY_ID: `${API_BASE_URL}/api/v1/cart/findById`,
  GET_TOTAL_CART_PRICE: `${API_BASE_URL}/api/v1/cart/total`,
  
  ADD_BOOK_TO_CART: `${API_BASE_URL}/api/v1/cart/add`,
  DELETE_BOOK_FROM_CART: `${API_BASE_URL}/api/v1/cart/delete`,
};

export const NP_API_BASE_URL = "https://api.novaposhta.ua/v2.0/json/";
