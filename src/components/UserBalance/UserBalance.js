import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import { walletSelectors } from "../../store/selectors";
import { styles } from "./Styles";

import ItemUserBalance from "./ItemUserBalance";

const UserBalance = () => {
  const wallet = useSelector(walletSelectors);
  return (
    <View style={styles.container}>
      <ItemUserBalance title={"Wallet"} money={wallet} icon={"cd"} />
    </View>
  );
};

export default UserBalance;
