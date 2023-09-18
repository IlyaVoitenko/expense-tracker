import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { currencyExchangeListSelectors } from "../../store/selectors";
import { setCurrencyExchange } from "../../store/thunk";
import {
  formatterСurrencyValue,
  formatterСurrencyName,
} from "../../utils/helpers";
import styles from "./Styles";

const CurrencyExchange = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrencyExchange());
  }, []);

  const currencyExchange = useSelector(currencyExchangeListSelectors);
  const currencyValue = formatterСurrencyValue(currencyExchange?.JPY);
  const currencyName = formatterСurrencyName(currencyExchange);
  return (
    <View style={styles.container}>
      <Text>
        USD 1 / {currencyName} {currencyValue}{" "}
      </Text>
    </View>
  );
};

export default CurrencyExchange;
