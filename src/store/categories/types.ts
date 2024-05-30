export type Category = {
  id?: number;
  name?: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface CategoriesSliceState {
  items: Category[];
  status: Status;
  selected: Category;
}
