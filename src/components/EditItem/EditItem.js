import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Styles";
import SaveCloseBtns from "./SaveCloseBtns";

const EditItem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SaveCloseBtns navigation={navigation} />
      <Text>EditItem</Text>
    </View>
  );
};

export default EditItem;
