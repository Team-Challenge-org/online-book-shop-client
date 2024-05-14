export type Book = {
  _id: string;
  index: number;
  picture: string;
  author: string;
  price: number;
  name: string;
  categories: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface BookSliceState {
  items: Book[];
  status: Status;
}
