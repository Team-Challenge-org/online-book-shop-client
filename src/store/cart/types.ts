export type TCartItem = {
  id: number;
  title: string;
  price: number;
  images: string[];
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
  totalPrice: number ;
  error: string | null;
};

export type TCartSliceState = {
  notAuthUserCart: TNotAuthUserCart;
  authUserCart: TAuthUserCart;
};
