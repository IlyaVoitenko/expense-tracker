import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ItemUserBalance = ({ title, money, icon }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{title}</Text>
      <Button title={icon} />
      <Text>{money}</Text>
    </View>
  );
};

export default ItemUserBalance;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 80,
  },
});
