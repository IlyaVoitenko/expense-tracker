import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { getPrivatBankCurrencyExchange } from "../../services/api";
import style from "./style";

const CurrencyExchange = () => {
  useEffect(() => {
    getPrivatBankCurrencyExchange();
  }, []);
  return (
    <View style={style.container}>
      <Text>CurrencyExchange</Text>
    </View>
  );
};

export default CurrencyExchange;
