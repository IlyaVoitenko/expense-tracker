import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { userBalanceListSelectors } from "../../store/selectors";
import ListBalanceAndCategories from "../ListBalanceAndCategories/ListBalanceAndCategories";
import { styles } from "./Styles";

const UserBalance = () => {
  const userBalanceList = useSelector(userBalanceListSelectors);
  return (
    <View style={styles.container}>
      <ListBalanceAndCategories
        List={userBalanceList}
        nameList={"userBalance"}
      />
    </View>
  );
};

export default UserBalance;
