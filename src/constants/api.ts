export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const Endpoints = {
  // books
  GET_SLIDER_BOOKS: `${API_BASE_URL}/api/v1/book/slider`,
  GET_BOOK_BY_ID: `${API_BASE_URL}/api/v1/book/findById/`,
  GET_ALL_BOOKS: `${API_BASE_URL}/api/v1/book/all?size=200`,
  GET_ALL_CATEGORIES: `${API_BASE_URL}/api/v1/book/category/all`,

  // user
  LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
  LOGOUT: `${API_BASE_URL}/api/v1/auth/logout`,
  REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
  OAUTH: `${API_BASE_URL}/api/v1/auth/oauth2/success`,

  CHECK_EMAIL: `${API_BASE_URL}/api/v1/user/resetPassword`,
  RESET_PASSWORD: `${API_BASE_URL}/api/v1/user/savePassword`,

  // authenticated user shopping cart
  GET_CART_ITEMS: `${API_BASE_URL}/api/v1/cart/items`,
  ADD_BOOK_TO_CART: `${API_BASE_URL}/api/v1/cart/add`,
  UPDATE_BOOK_QUANTITY: `${API_BASE_URL}/api/v1/cart/update`,
  DELETE_BOOK_FROM_CART: `${API_BASE_URL}/api/v1/cart/delete`,
};

export const NP_API_BASE_URL = "https://api.novaposhta.ua/v2.0/json/";
