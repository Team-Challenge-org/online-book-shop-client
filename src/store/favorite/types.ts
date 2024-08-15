export type TFavoriteItems = {
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
};

export type TFavoriteSliceState = {
  items: TFavoriteItems[];
};
