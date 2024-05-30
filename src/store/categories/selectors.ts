import { RootState } from 'store/store';

export const selectCategories = (state: RootState) => state.categories;
export const selectCategory = (state: RootState) => state.categories.selected;
