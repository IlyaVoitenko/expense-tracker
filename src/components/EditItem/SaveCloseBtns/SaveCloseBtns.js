import { View, TouchableOpacity } from "react-native";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  handleGoBackNavigation,
  handleSaveChangesSelectedItem,
} from "../../../utils/helpers";
import React from "react";
import { useDispatch } from "react-redux";

const SaveCloseBtns = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.constainer}>
      <TouchableOpacity onPress={() => handleGoBackNavigation(navigation)}>
        <FontAwesomeIcon style={styles.close} icon={faXmark} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSaveChangesSelectedItem(dispatch, navigation)}
      >
        <FontAwesomeIcon style={styles.check} icon={faCheck} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default SaveCloseBtns;
