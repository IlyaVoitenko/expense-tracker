import { Text, View } from "react-native";
import { filterIconBtn, filterStyleBtn } from "../../../utils/arrayUserBalance";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./Styles";

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
