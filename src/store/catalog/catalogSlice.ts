import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  showSidebar: boolean;
};

const initialState: TInitialState = {
  showSidebar: false,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    openCategoriesSidebar(state) {
      state.showSidebar = true;
    },

    closeCategoriesSidebar(state) {
      state.showSidebar = false;
    },
  },
});

export default catalogSlice.reducer;

export const { openCategoriesSidebar, closeCategoriesSidebar } =
  catalogSlice.actions;
