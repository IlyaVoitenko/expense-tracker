import { View, TouchableOpacity } from "react-native";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { handleClose, handleSaveChanges } from "../../../utils/helpers";
import {
  categorieOrBalanceUserSelector,
  valueAccountСhangeSelector,
} from "../../../store/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SaveCloseBtns = ({ navigation }) => {
  const dispatch = useDispatch();
  const nameList = useSelector(categorieOrBalanceUserSelector);
  const valueAccountСhange = useSelector(valueAccountСhangeSelector);
  return (
    <View style={styles.constainer}>
      <TouchableOpacity onPress={() => handleClose(dispatch, navigation)}>
        <FontAwesomeIcon style={styles.close} icon={faXmark} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          handleSaveChanges(dispatch, nameList, valueAccountСhange, navigation)
        }
      >
        <FontAwesomeIcon style={styles.check} icon={faCheck} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default SaveCloseBtns;
