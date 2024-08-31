import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from 'constants/api';
import Axios from 'utils/axiosConfig';

export const getFavorites = createAsyncThunk('favorite/getFavorites', async () => {
  const { data } = await Axios.get(Endpoints.GET_FAVORITE);
  return data;
});
