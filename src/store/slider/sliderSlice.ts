import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchSliderBooks } from "./asyncAction";
import { Status } from "store/books/types";
import { SliderBook, SliderBookSliceState } from "./types";

const initialState: SliderBookSliceState = {
  items: [],
  status: Status.LOADING,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSliderBooks(state, action: PayloadAction<SliderBook[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSliderBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSliderBooks.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchSliderBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setSliderBooks } = sliderSlice.actions;

export default sliderSlice.reducer;
