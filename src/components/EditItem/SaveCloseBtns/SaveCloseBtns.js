import { View, TouchableOpacity } from "react-native";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  handleGoBackNavigation,
  handleSaveChangesSelectedItem,
} from "../../../utils/helpers";
import React from "react";

const SaveCloseBtns = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <TouchableOpacity onPress={() => handleGoBackNavigation(navigation)}>
        <FontAwesomeIcon style={styles.close} icon={faXmark} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSaveChangesSelectedItem(navigation)}
      >
        <FontAwesomeIcon style={styles.check} icon={faCheck} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default SaveCloseBtns;
