import React from "react";
import { View, TextInput } from "react-native";
import { handleTextChange } from "../../../utils/helpers";
import { style } from "./Styles";
import { useDispatch } from "react-redux";

const NumericInput = () => {
  const dispatch = useDispatch();

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={(text) => handleTextChange(dispatch, text)}
        placeholder="enter summa"
        keyboardType="numeric"
      />
    </View>
  );
};

export default NumericInput;
