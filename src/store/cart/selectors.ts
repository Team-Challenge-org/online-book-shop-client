import { TBook } from 'store/books/types';
import { RootState } from 'store/store';

export const selectCart = (state: RootState) => state.cart;
export const selectOneCart = (book: TBook) => ( (state: RootState) => state.cart.items.find(item => book.id === item.id))
