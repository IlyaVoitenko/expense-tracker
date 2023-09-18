import { createSlice } from "@reduxjs/toolkit";
import { setCurrencyExchange } from "../../thunk";

const initialState = {
  currencyExchange: null,
};

const currencyExchangeSlice = createSlice({
  name: "currencyExchange",
  initialState,
  extraReducers: {
    [setCurrencyExchange.fulfilled]: (state, action) => {
      state.currencyExchange = action.payload;
    },
    [setCurrencyExchange.pending]: (state) => {},
    [setCurrencyExchange.rejected]: (state) => {},
  },
});
export default currencyExchangeSlice.reducer;
