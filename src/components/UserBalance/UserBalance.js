import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { userBalanceListSelectors } from "../../store/selectors";
import { styles } from "./Styles";

import ItemUserBalance from "./ItemUserBalance";

const UserBalance = () => {
  const userBalanceList = useSelector(userBalanceListSelectors);
  return (
    <View style={styles.container}>
      {userBalanceList.map((item) => {
        return (
          <ItemUserBalance
            key={item.id}
            title={item.title}
            summa={item.summa}
          />
        );
      })}
    </View>
  );
};

export default UserBalance;
