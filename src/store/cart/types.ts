import { Book } from 'store/book/types';

export type CartItems = {
  _id: string;
  index: number;
  picture: string;
  author: string;
  price: number;
  name: string;
  categories: string;
};

export type CartSliceState = {
  items: CartItems[];
};
