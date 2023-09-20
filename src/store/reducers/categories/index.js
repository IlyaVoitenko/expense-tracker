import { createSlice } from "@reduxjs/toolkit";
import { categoriesList } from "../../../utils/arrayCategories";

const initialState = {
  categoriesList: [...categoriesList],
  indexSelectedItem: null,
};

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setIndexSelectedItemCategories: (state, action) => {
      state.indexSelectedItem = action.payload;
    },
    setAddBalanceCategorie: (state, action) => {
      state.categoriesList[indexSelectedItem].summa += action.payload;
    },
    setSubtractBalanceCategorie: (state, action) => {
      state.categoriesList[indexSelectedItem].summa += action.payload;
    },
  },
});
export const {
  setIndexSelectedItemCategories,
  setAddBalanceCategorie,
  setSubtractBalanceCategorie,
} = categories.actions;
export default categories.reducer;
