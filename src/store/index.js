import { configureStore } from "@reduxjs/toolkit";
import currencyExchangeReducer from "./reducers/currencyExchange";
import userBalanceReducer from "./reducers/userBalance";
import categoriesReducer from "./reducers/categories";
import valueAccountСhangeReudcer from "./reducers/valueAccountСhange";

export const store = configureStore({
  reducer: {
    currencyExchange: currencyExchangeReducer,
    userBalance: userBalanceReducer,
    categories: categoriesReducer,
    valueAccountСhange: valueAccountСhangeReudcer,
  },
});

export default store;
