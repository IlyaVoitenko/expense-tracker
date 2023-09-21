import { View } from "react-native";
import React from "react";
import { styles } from "./Styles";
import ItemUserBalance from "../ListBalanceAndCategories/ItemBalanceAndCategories";

const ListBalanceAndCategories = ({ List, nameList, navigation }) => {
  return (
    <View style={styles.container}>
      {List.map((item) => {
        return (
          <ItemUserBalance
            key={item.id}
            title={item.title}
            summa={item.summa}
            list={List}
            idItem={item.id}
            nameList={nameList}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default ListBalanceAndCategories;
