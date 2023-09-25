import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Styles";
import SaveCloseBtns from "./SaveCloseBtns";
import Carousel from "../Carousel";

const EditItem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SaveCloseBtns navigation={navigation} />
      <Carousel />
      <Text>EditItem</Text>
    </View>
  );
};

export default EditItem;
