import { View } from "react-native";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import { isLoadingSelectors } from "../../store/selectors";
import LoadingScreen from "../../screens/LoadingScreen";

import React from "react";

const Main = () => {
  const isLoading = useSelector(isLoadingSelectors);

  return <View>{isLoading ? <LoadingScreen /> : <CurrencyExchange />}</View>;
};
export default Main;
