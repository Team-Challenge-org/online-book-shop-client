import { Status } from "store/books/types";

export type TSliderBook = {
  id: number;
  titleImage: string;
  title: string;
  price: number;
  category: string;
  available: string;
  quantity: number;
  authors: string | null;
};

export interface ISliderBookSliceState {
  items: TSliderBook[];
  status: Status;
}

export type SliderItemType = {
  obj: TSliderBook;
};
