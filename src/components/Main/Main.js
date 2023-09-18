import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import { isLoadingSelectors } from "../../store/selectors";
import LoadingScreen from "../../screens/LoadingScreen";

const Main = () => {
  const isLoading = useSelector(isLoadingSelectors);
  return (
    <View>
      <CurrencyExchange />
    </View>
  );
};
export default Main;
