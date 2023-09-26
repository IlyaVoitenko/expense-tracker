import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  categorieOrBalanceUser: "",
};

const valueAccountСhangeSlice = createSlice({
  name: "valueAccountСhange",
  initialState,
  reducers: {
    setValueAccountСhange: (state, action) => {
      state.value = action.payload;
    },
    setCategorieOrBalanceUser: (state, action) => {
      state.categorieOrBalanceUser = action.payload;
    },
  },
});
export const { setValueAccountСhange, setCategorieOrBalanceUser } =
  valueAccountСhangeSlice.actions;
export default valueAccountСhangeSlice.reducer;
