import { View } from "react-native";
import React from "react";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import UserBalance from "../UserBalance";
import Categories from "../Categories";

const Common = () => {
  return (
    <View>
      <CurrencyExchange />
      <UserBalance />
      <Categories />
    </View>
  );
};

export default Common;
