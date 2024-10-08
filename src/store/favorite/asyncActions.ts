import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from 'constants/api';
import { RootState } from 'store/store';
import Axios from 'utils/axiosConfig';
import { TFavoriteItem } from './types';
import { addOrRemoveFavoriteItem } from './favoriteSlice';

export const getFavorites = createAsyncThunk('favorite/getFavorites', async () => {
  const { data } = await Axios.get(Endpoints.GET_FAVORITE);
  localStorage.setItem('favorite', JSON.stringify(data));
  return data;
});

export const addOrRemoveFavoriteAsync = createAsyncThunk(
  'favorite/addOrRemoveFavorite',
  async (obj: TFavoriteItem, { getState, dispatch }) => {
    const state = getState() as RootState;
    const isAuth = state.auth.isAuth;

    const checkItemInFavorite = state.favorite.items.find(
      (item: TFavoriteItem) => item.id === obj.id,
    );

    dispatch(addOrRemoveFavoriteItem(obj));

    if (isAuth && checkItemInFavorite) {
      const { data } = await Axios.delete(`${Endpoints.DELETE_FAVORITE}${obj.id}`);
      return data;
    }

    if (isAuth && !checkItemInFavorite) {
      const { data } = await Axios.post(`${Endpoints.ADD_FAVORITE}${obj.id}`);
      return data;
    }
  },
);
