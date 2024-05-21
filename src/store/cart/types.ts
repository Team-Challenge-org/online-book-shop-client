export type CartItem = {
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
  items: CartItem[];
};
