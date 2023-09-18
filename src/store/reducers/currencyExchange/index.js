import { createSlice } from "@reduxjs/toolkit";
import { setCurrencyExchange } from "../../thunk";

const initialState = {
  currencyExchange: null,
  isLoading: false,
};

const currencyExchangeSlice = createSlice({
  name: "currencyExchange",
  initialState,
  extraReducers: {
    [setCurrencyExchange.fulfilled]: (state, action) => {
      state.currencyExchange = action.payload;
      state.isLoading = false;
    },
    [setCurrencyExchange.pending]: (state) => {
      state.isLoading = true;
    },
    [setCurrencyExchange.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default currencyExchangeSlice.reducer;
