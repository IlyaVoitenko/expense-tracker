export const currencyExchangeListSelectors = (state) =>
  state.currencyExchange.currencyExchange;
export const isLoadingSelectors = (state) => state.currencyExchange.isLoading;
export const userBalanceListSelectors = (state) =>
  state.userBalance.userBalanceList;
export const categoriesListSelectors = (state) =>
  state.categories.categoriesList;
export const indexSelectedItemCategories = (state) =>
  state.categories.indexSelectedItem;
export const indexSelectedItemBalance = (state) =>
  state.userBalance.indexSelectedItem;
