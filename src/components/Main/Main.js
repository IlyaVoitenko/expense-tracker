import React from "react";
import { View } from "react-native";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import UserBalance from "../UserBalance";
import Categories from "../Categories";

const Main = () => {
  return (
    <View>
      <CurrencyExchange />
      <UserBalance />
      <Categories />
    </View>
  );
};
export default Main;
