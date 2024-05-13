export type IBook = {
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

export interface IBookSliceState {
  items: IBook[];
  status: Status;
}
