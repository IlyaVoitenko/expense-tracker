import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ItemUserBalance = ({ title, summa }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{title}</Text>
      <Button title={""} />
      <Text>{summa}</Text>
    </View>
  );
};

export default ItemUserBalance;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
  },
});
