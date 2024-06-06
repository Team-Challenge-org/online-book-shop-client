import { TCategory } from 'store/categories/types';

export const getCategoryFromLS = () => {
  const data = localStorage.getItem('category');
  const category: TCategory = data ? JSON.parse(data) : '';

  return category;
};
