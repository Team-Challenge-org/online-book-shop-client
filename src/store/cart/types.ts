import { Book } from 'store/book/types';

export type CartItems = {
  id: number;
  title: string;
  full_description: string;
  short_description: string;
  price: number;
  category: string;
  available: string;
  author: string | null;
  titleImage: string | null;
  timeAdded: string;
  images: string[];
};

export type CartSliceState = {
  items: CartItems[];
};
