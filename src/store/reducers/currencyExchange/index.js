import { createSlice } from "@reduxjs/toolkit";
import { setCurrencyExchange } from "../../thunk";

const initialState = {
  currencyExchange: null,
};

const currencyExchangeSlice = createSlice({
  name: "currencyExchange",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setCurrencyExchange.fulfilled, (state, action) => {
      state.currencyExchange = action.payload;
    });
  },
});
export default currencyExchangeSlice.reducer;
