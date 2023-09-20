import { View } from "react-native";
import React from "react";
import { styles } from "./Styles";
import ItemUserBalance from "../ListBalanceAndCategories/ItemBalanceAndCategories";

const ListBalanceAndCategories = ({ List }) => {
  return (
    <View style={styles.container}>
      {List.map((item) => {
        return (
          <ItemUserBalance
            key={item.id}
            title={item.title}
            summa={item.summa}
          />
        );
      })}
    </View>
  );
};

export default ListBalanceAndCategories;
