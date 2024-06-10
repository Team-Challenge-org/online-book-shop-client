export type TBooksData = {
  content: TBook[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: TBooksPageable;
  size: number;
  sort: TBooksSort;
  totalElements: number;
  totalPages: number;
};

export type TBook = {
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

export type TBooksPageable = {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: TBooksSort;
  unpaged: boolean;
};

export type TBooksSort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IBookSliceState {
  books: TBook[];
  similarBooks: TBook[];
  status: Status;
}
