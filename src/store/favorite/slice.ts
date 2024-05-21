import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteItems, FavoriteSliceState } from './types';
import { getFavoriteFromLS } from 'utils/getFavoriteFromLS';

const initialState: FavoriteSliceState = getFavoriteFromLS();

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addOrRemoveFavoriteItem(state, action: PayloadAction<FavoriteItems>) {
      const checkItemInFavorite = state.items.find(
        (item: FavoriteItems) => item.id === action.payload.id,
      );
      if (checkItemInFavorite) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.items.push({
          ...action.payload,
        });
      }
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addOrRemoveFavoriteItem, clearItems } = favoriteSlice.actions;

export default favoriteSlice.reducer;
