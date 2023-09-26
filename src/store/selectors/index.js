//currencyExchange
export const currencyExchangeListSelectors = (state) =>
  state.currencyExchange.currencyExchange;
//userBalance
export const userBalanceListSelectors = (state) =>
  state.userBalance.userBalanceList;
export const indexSelectedItemBalance = (state) =>
  state.userBalance.indexSelectedItem;
//categories
export const categoriesListSelectors = (state) =>
  state.categories.categoriesList;
export const indexSelectedItemCategories = (state) =>
  state.categories.indexSelectedItem;
//value
export const valueAccountСhangeSelector = (state) =>
  state.valueAccountСhange.value;
export const categorieOrBalanceUserSelector = (state) =>
  state.valueAccountСhange.categorieOrBalanceUser;
