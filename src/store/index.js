import { configureStore } from "@reduxjs/toolkit";
import currencyExchangeReducer from "./reducers/currencyExchange";
import userBalanceReducer from "./reducers/userBalance";

export const store = configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
    userBalance: userBalanceReducer,
  },
});

export default store;
