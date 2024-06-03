import { RootState } from '../store';

export const selectBookData = (state: RootState) => state.books;
