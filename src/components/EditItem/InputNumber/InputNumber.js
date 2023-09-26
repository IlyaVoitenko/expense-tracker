import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { handleTextChange } from "../../../utils/helpers";
import { style } from "./Styles";

const NumericInput = () => {
  const [numbers, setNumbers] = useState(0);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={({ value }) => handleTextChange(setNumbers, value)}
        value={numbers}
        placeholder="enter summa"
        keyboardType="numeric"
      />
    </View>
  );
};

export default NumericInput;
