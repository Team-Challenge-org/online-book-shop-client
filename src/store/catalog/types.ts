export type TCatalogBook = {
  id: number;
  title: string;
  full_description: string;
  short_description: string;
  price: number;
  category: string;
  isThisSlider: boolean;
  available?: string;
  authors: string | null;
  titleImage: string | undefined;
  timeAdded: string;
  images: string[];
  quantity: number;
};
