import type { TBook } from "store/books/types";

export type TFooterSocialItemProps = {
  show: JSX.Element;
  hover: JSX.Element;
  link: string;
};

export type TCatalogItemType = {
  item: TBook;
};

export type TButtonFavoriteOrCartType = {
  isAdded: boolean;
};

export type TDropdownItemType = {
  title: string;
  description?: string;
  characteristics?: TDropdownCharacteristicsType;
  order?: string[];
};

export type TDropdownCharacteristicsType = {
  publishing: string;
  language: string;
  cover: string;
  pages: number;
  format: string;
  isbn: string;
  paper: string;
  illustrations: string;
  type: string;
};
