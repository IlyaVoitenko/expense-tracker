import React from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import { filterIconBtn, filterStyleBtn } from "../../../utils/helpers";
export const SLIDER_WIDTH = Dimensions.get("window").width + 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const CarouselCardItem = ({ item }) => {
  const { title, id } = item;
  const icon = filterIconBtn(title);
  const iconStyle = filterStyleBtn(title);
  return (
    <View style={styles.container} key={id}>
      <FontAwesomeIcon icon={icon} size={35} style={iconStyle} />
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default CarouselCardItem;
