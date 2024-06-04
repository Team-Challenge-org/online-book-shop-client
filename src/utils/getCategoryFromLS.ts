import { Category } from 'store/categories/types';

export const getCategoryFromLS = () => {
  const data = localStorage.getItem('category');
  const category: Category = data ? JSON.parse(data) : '';

  return category;
};
