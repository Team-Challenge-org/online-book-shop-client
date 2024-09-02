import { getFavoriteFromLS } from 'utils/getDataFromLS';
import type { TFavoriteItem, TFavoriteSliceState } from './types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addOrRemoveFavoriteAsync, getFavorites } from './asyncActions';

const initialState: TFavoriteSliceState = {
  items: getFavoriteFromLS(),
  loading: false,
  error: null,
};
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addOrRemoveFavoriteItem(state, action: PayloadAction<TFavoriteItem>) {
      console.log('try');
      console.log(action.payload);
      const checkItemInFavorite = state.items.find(
        (item: TFavoriteItem) => item.id === action.payload.id,
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
  },
  extraReducers(builder) {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
        state.error = action.error.message!;
      })
      .addCase(addOrRemoveFavoriteAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrRemoveFavoriteAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addOrRemoveFavoriteAsync.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
        state.error = action.error.message!;
      });
  },
});

export const { addOrRemoveFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
