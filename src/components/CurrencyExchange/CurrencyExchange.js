import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { currencyExchangeListSelectors } from "../../store/selectors";
import { setCurrencyExchange } from "../../store/thunk";
import { formatterСurrencyValue } from "../../utils/helpers";
import style from "./style";

const CurrencyExchange = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrencyExchange());
  }, []);

  const currencyExchange = useSelector(currencyExchangeListSelectors);
  const currencyValue = formatterСurrencyValue(currencyExchange?.JPY);
  const currencyName = Object.keys(currencyExchange)[0];

  return (
    <View style={style.container}>
      <Text>
        USD 1 / {currencyName} {currencyValue}{" "}
      </Text>
    </View>
  );
};

export default CurrencyExchange;
