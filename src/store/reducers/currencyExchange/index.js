import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyExchange: null,
};
const currencyExchangeSlice = createSlice({
  name: "currencyExchange",
  initialState,
  extraReducers: {
    // [method.fulfilled]: (state, action) => {},
    // [method.pending]: (state) => {},
    // [method.rejected]: (state) => {},
  },
});
export default currencyExchangeSlice.reducer;
