import { createSlice } from "@reduxjs/toolkit";
import { setCurrencyExchangeList } from "../../thunk";

const initialState = {
  currencyExchangeList: null,
  isLoading: false,
};

const currencyExchangeSlice = createSlice({
  name: "currencyExchange",
  initialState,
  extraReducers: {
    [setCurrencyExchangeList.fulfilled]: (state, action) => {
      state.currencyExchangeList = action.payload;
      state.isLoading = false;
    },
    [setCurrencyExchangeList.pending]: (state) => {
      state.isLoading = true;
    },
    [setCurrencyExchangeList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default currencyExchangeSlice.reducer;
