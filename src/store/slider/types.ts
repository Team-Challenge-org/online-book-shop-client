import { Status } from 'store/book/types';

export type SliderBook = {
  id: number;
  image: string;
  bookName: string;
};

export interface SliderBookSliceState {
  items: SliderBook[];
  status: Status;
}

export type SliderItemType = {
  obj: SliderBook;
};
