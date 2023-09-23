import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  filterIconBtn,
  filterStyleBtn,
  handleEdit,
} from "../../../utils/helpers";

import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./Styles";

const ItemBalanceAndCategories = ({
  idItem,
  title,
  summa,
  list,
  nameList,
  navigation,
}) => {
  const dispatch = useDispatch();
  const icon = filterIconBtn(title);
  const styleIcon = filterStyleBtn(title);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Item");
        handleEdit(list, idItem, nameList, dispatch);
      }}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <FontAwesomeIcon icon={icon} size={35} style={styleIcon} />
        <Text style={styles.itemSumma}>{summa}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBalanceAndCategories;
