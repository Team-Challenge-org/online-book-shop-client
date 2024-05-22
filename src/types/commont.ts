import { Book } from 'store/book/types';

export type FooterSocialItemProps = {
  show: JSX.Element;
  hover: JSX.Element;
  link: string;
};

export type CatalogItemType = {
  item: Book;
};

export type ButtonHoverType = {
  hover: JSX.Element;
  isAdded: boolean;
};
