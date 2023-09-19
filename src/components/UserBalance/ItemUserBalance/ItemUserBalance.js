import { StyleSheet, Text, View } from "react-native";
import { filterIconBtn, filterStyleBtn } from "../../../utils/arrayUserBalance";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ItemUserBalance = ({ title, summa }) => {
  const icon = filterIconBtn(title);
  const styleIcon = filterStyleBtn(title);
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <FontAwesomeIcon icon={icon} size={30} style={styleIcon} />
      <Text style={styles.itemSumma}>{summa}</Text>
    </View>
  );
};

export default ItemUserBalance;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    width: 100,
    height: 80,
  },
  itemSumma: {
    padding: 10,
  },
  itemTitle: {
    paddingBottom: 5,
  },
});
