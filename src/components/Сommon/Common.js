import { View } from "react-native";
import React from "react";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import UserBalance from "../UserBalance";
import Categories from "../Categories";

const Common = ({ navigation }) => {
  return (
    <View>
      <CurrencyExchange />
      <UserBalance navigation={navigation} />
      <Categories navigation={navigation} />
    </View>
  );
};

export default Common;
