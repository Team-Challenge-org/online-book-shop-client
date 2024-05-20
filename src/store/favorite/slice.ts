import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from 'utils/getCartFromLS';
import { FavoriteItems, FavoriteSliceState } from './types';

const initialState: FavoriteSliceState = getCartFromLS();

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addOrRemoveFavoriteItem(state, action: PayloadAction<FavoriteItems>) {
      let checkItemInFavorite = state.items.find(
        (item: FavoriteItems) => item.id === action.payload.id,
      );
      if (checkItemInFavorite) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        localStorage.setItem(
          'favorite',
          JSON.stringify({
            items: state.items,
          }),
        );
      } else {
        state.items.push({
          ...action.payload,
        });
        localStorage.setItem(
          'cart',
          JSON.stringify({
            items: state.items,
          }),
        );
      }
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addOrRemoveFavoriteItem, clearItems } = favoriteSlice.actions;

export default favoriteSlice.reducer;
