import { Status } from "store/books/types";

export type SliderBook = {
  id: number;
  titleImage: string;
  title: string;
  price: number;
  category: string;
  available: string;
  authors: string | null;
};

export interface SliderBookSliceState {
  items: SliderBook[];
  status: Status;
}

export type SliderItemType = {
  obj: SliderBook;
};
