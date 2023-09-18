import React from "react";
import { View } from "react-native";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import UserBalance from "../UserBalance";

const Main = () => {
  return (
    <View>
      <CurrencyExchange />
      <UserBalance />
    </View>
  );
};
export default Main;
