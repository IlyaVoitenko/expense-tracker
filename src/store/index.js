import { configureStore } from "@reduxjs/toolkit";
import currencyExchangeReducer from "./reducers/currencyExchange";

export const store = configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
  },
});

export default store;
