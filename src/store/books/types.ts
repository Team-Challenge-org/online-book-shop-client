export type Book = {
  id: number;
  title: string;
  full_description: string;
  short_description: string;
  price: number;
  category: string;
  isThisNotSlider: boolean;
  available: string;
  authors: string | null;
  titleImage: string | null;
  timeAdded: string;
  images: string[];
  quantity: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface BookSliceState {
  books: Book[];
  status: Status;
}
