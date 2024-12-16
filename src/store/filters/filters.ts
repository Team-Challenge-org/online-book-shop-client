import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { InitialStateType, PayloadActionTypes } from "./filters.types";

const initialState: InitialStateType = {
  filterIsActive: false,
  availability: [],
  typesOfBook: [],
  languages: [],
  authors: [],
  publishingHouse: [],
  typesOfCover: [],
  prices: {
    min: "0",
    max: "0",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state: InitialStateType, action: PayloadAction<PayloadActionTypes>) => {
      const actionsHandler: { [key: string]: (name: string) => void } = {
        Наявність: (name: string) => state.availability.push(name),
        "Тип книги": (name: string) => state.typesOfBook.push(name),
        Мова: (name: string) => state.languages.push(name),
        Автор: (name: string) => state.authors.push(name),
        Видавництво: (name: string) => state.publishingHouse.push(name),
        "Тип обкладинки": (name: string) => state.typesOfCover.push(name),
        "Ціна до": (name: string) => (state.prices.max = name),
        "Ціна від": (name: string) => (state.prices.min = name),
      };

      const handler = actionsHandler[action.payload.type];
      if (handler) {
        handler(action.payload.name);
      }

      state.filterIsActive = false;
    },
    deleteFilter: (state: InitialStateType, action: PayloadAction<PayloadActionTypes>) => {
      const actionsHandler: { [key: string]: (name: string) => void } = {
        Наявність: (name: string) =>
          (state.availability = state.availability.filter((item) => item !== name)),
        "Тип книги": (name: string) =>
          (state.typesOfBook = state.typesOfBook.filter((item) => item !== name)),
        Мова: (name: string) => (state.languages = state.languages.filter((item) => item !== name)),
        Автор: (name: string) => (state.authors = state.authors.filter((item) => item !== name)),
        Видавництво: (name: string) =>
          (state.publishingHouse = state.publishingHouse.filter((item) => item !== name)),
        "Тип обкладинки": (name: string) =>
          (state.typesOfCover = state.typesOfCover.filter((item) => item !== name)),
      };

      const handler = actionsHandler[action.payload.type];
      if (handler) {
        handler(action.payload.name);
      }

      state.filterIsActive = false;
    },
    setFilterIsActive: (state: InitialStateType, action: PayloadAction<boolean>) => {
      state.filterIsActive = false;
      state.filterIsActive = action.payload;
    },
  },
});

export const { setFilter, deleteFilter, setFilterIsActive } = filtersSlice.actions;
export default filtersSlice.reducer;
