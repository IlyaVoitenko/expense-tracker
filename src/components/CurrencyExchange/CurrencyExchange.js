import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { currencyExchangeListSelectors } from "../../store/selectors";
import { setCurrencyExchangeList } from "../../store/thunk";
import { formatterСurrency } from "../../utils/helpers";
import style from "./style";

const CurrencyExchange = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrencyExchangeList());
  }, []);
  const currencyExchangeList = useSelector(currencyExchangeListSelectors);
  const { buy, sale, ccy } = currencyExchangeList[1];
  const saleUSD = formatterСurrency(sale);
  const buyUSD = formatterСurrency(buy);

  return (
    <View style={style.container}>
      <Text>
        {ccy} {saleUSD} / {buyUSD}
      </Text>
    </View>
  );
};

export default CurrencyExchange;
