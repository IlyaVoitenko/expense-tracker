import React from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import { filterIconBtn, filterStyleBtn } from "../../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIndexSelectedItemBalance } from "../../../store/reducers/userBalance";

const CarouselCardItem = ({ item, activeSlide }) => {
  const { title, id } = item;
  const dispatch = useDispatch();
  const icon = filterIconBtn(title);
  const iconStyle = filterStyleBtn(title);

  useEffect(() => {
    dispatch(setIndexSelectedItemBalance(activeSlide));
  }, [activeSlide]);

  return (
    <View style={styles.container} key={id}>
      <FontAwesomeIcon icon={icon} size={35} style={iconStyle} />
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default CarouselCardItem;
