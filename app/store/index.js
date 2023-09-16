import { configureStore } from "@reduxjs/toolkit";
import currencyExchangeReducer from "./reducers/currencyExchange";
const store = configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
  },
});

export default store;
