import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const valueAccountСhangeSlice = createSlice({
  name: "valueAccountСhange",
  initialState,
  reducers: {
    setValueAccountСhange: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setValueAccountСhange } = valueAccountСhangeSlice.actions;
export default valueAccountСhangeSlice.reducer;
