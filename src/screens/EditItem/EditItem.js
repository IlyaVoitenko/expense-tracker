import { View, Text } from "react-native";
import React from "react";

const EditItem = ({ navigation }) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
      >
        EditItem
      </Text>
    </View>
  );
};

export default EditItem;
