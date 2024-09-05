export type TFavoriteItem = {
  id: number;
  title: string;
  full_description: string;
  short_description: string;
  price: number;
  category: string;
  isThisSlider: boolean;
  available?: string;
  authors: string | null;
  titleImage: string | null;
  timeAdded: string;
  images: string[];
  quantity: number;
};

export type TFavoriteSliceState = {
  items: TFavoriteItem[];
  loading: boolean;
  error: string | null;
};
