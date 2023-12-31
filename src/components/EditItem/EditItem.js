import { View } from "react-native";
import React from "react";
import { styles } from "./Styles";
import SaveCloseBtns from "./SaveCloseBtns";
import Carousel from "../Carousel";
import InputNumber from "./InputNumber";

const EditItem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SaveCloseBtns navigation={navigation} />
      <Carousel />
      <InputNumber />
    </View>
  );
};

export default EditItem;
