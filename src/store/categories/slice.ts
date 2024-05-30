import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoriesSliceState, Category, Status } from './types';
import { fetchCategories } from './asyncAction';

const initialState: CategoriesSliceState = {
  items: [],
  status: Status.LOADING,
  selected: {},
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.items = action.payload;
    },
    setCategory(state, action: PayloadAction<Category>) {
      const findCategory = state.items.find((category) => category.id === action.payload.id);

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
