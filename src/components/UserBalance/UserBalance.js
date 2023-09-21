import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { userBalanceListSelectors } from "../../store/selectors";
import ListBalanceAndCategories from "../ListBalanceAndCategories/ListBalanceAndCategories";
import { styles } from "./Styles";

const UserBalance = ({ navigation }) => {
  const userBalanceList = useSelector(userBalanceListSelectors);
  return (
    <View style={styles.container}>
      <ListBalanceAndCategories
        List={userBalanceList}
        navigation={navigation}
        nameList={"userBalance"}
      />
    </View>
  );
};

export default UserBalance;
