import { fetchCategories } from "./asyncAction";
import { getCategoryFromLS } from "utils/getDataFromLS";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategoriesSliceState, type TCategory, Status } from "./types";

const initialState: ICategoriesSliceState = {
  items: [],
  status: Status.LOADING,
  selected: getCategoryFromLS(),
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<TCategory[]>) {
      state.items = action.payload;
    },
    setCategory(state, action: PayloadAction<TCategory>) {
      // console.log(action.payload, "payload");
      const findCategory = state.items.find(
        (category) => category.id === action.payload.id
      );
      console.log(findCategory, "payload");
      
      if (findCategory) {
        state.selected = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setCategories, setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
