import { TBook } from 'store/books/types';
import { RootState } from 'store/store';

export const selectFavorite = (state: RootState) => state.favorite;
export const selectOneFavorite = (book: TBook) => (state: RootState) =>
  state.favorite.items.find((item) => book.id === item.id);
