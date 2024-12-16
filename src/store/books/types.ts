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
  isThisSlider: boolean;
  available?: string;
  authors: string | null;
  titleImage: string | undefined;
  timeAdded: string;
  images: string[];
  quantity: number;
  characteristicDto?: {
    publisher: string;
    language: string;
    bookType: string;
    coverType: string;
  };
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
