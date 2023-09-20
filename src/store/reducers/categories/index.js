import { createSlice } from "@reduxjs/toolkit";
import { categoriesList } from "../../../utils/arrayCategories";

const initialState = {
  categoriesList: [...categoriesList],
};

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});
export const {} = categories.actions;
export default categories.reducer;
