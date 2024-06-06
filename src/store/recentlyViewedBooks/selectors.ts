import { RootState } from "store/store";

export const selectRecentlyViewedBooks = (state: RootState) =>
  state.recentlyViewedBooks;
