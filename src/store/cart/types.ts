export type TCartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  authors: string | null;
  titleImage: string | null;
};

export type TNotAuthUserCart = {
  cartItems: TCartItem[];
};

export type TAuthUserCart = {
  isLoading: boolean;
  cartItems: TCartItem[];
  totalPrice: number;
  error: string | null;
};

export type TCartSliceState = {
  notAuthUserCart: TNotAuthUserCart;
  authUserCart: TAuthUserCart;
};

export type TGetCartItemsResponse = {
  items: TCartItem[];
  totalPrice: number;
};

export type TAPIError = {
  statusCode: number;
  message: string;
  timestamp: string;
};

export type TUpdateParams = {
  bookId: number;
  quantity?: number;
};
