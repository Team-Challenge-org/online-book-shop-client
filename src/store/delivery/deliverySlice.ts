import { createSlice } from '@reduxjs/toolkit';
import { TDeliveryState } from './types';
import { fetchAddress, fetchCity } from './asyncActions';

const initialState: TDeliveryState = {
  loading: false,
  cityArray: [],
  citySelect: '',
  addressArray: [],
  addressSelect: '',
  service: '',
  error: null,
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setCity(state, action) {
      state.citySelect = action.payload;
    },
    setAddress(state, action) {
      state.addressSelect = action.payload;
    },
    setService(state, action) {
      state.service = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.loading = true;
        state.cityArray = [];
        state.error = null;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.loading = false;
        state.cityArray = action.payload;
        state.error = null;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.loading = false;
        state.cityArray = [];
        console.log(action.error.message);
        state.error = action.error.message!;
      })
      .addCase(fetchAddress.pending, (state) => {
        state.loading = true;
        state.addressArray = [];
        state.error = null;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addressArray = action.payload;
        state.error = null;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.loading = false;
        state.addressArray = [];
        console.log(action.error.message);
        state.error = action.error.message!;
      });
  },
});

export const { setCity, setAddress, setService } = deliverySlice.actions;

export default deliverySlice.reducer;
