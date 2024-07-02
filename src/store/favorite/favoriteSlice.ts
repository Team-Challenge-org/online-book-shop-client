import { getFavoriteFromLS } from 'utils/getDataFromLS';
import type { TFavoriteItems, TFavoriteSliceState } from './types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: TFavoriteSliceState = getFavoriteFromLS();

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addOrRemoveFavoriteItem(state, action: PayloadAction<TFavoriteItems>) {
      const checkItemInFavorite = state.items.find(
        (item: TFavoriteItems) => item.id === action.payload.id,
      );
      if (checkItemInFavorite) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.items.push({
          ...action.payload,
        });
      }
      localStorage.setItem('favorite', JSON.stringify(state.items));
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addOrRemoveFavoriteItem, clearItems } = favoriteSlice.actions;

export default favoriteSlice.reducer;
