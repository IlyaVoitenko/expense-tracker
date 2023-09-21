import { Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { categoriesListSelectors } from "../../store/selectors";
import ListBalanceAndCategories from "../ListBalanceAndCategories/ListBalanceAndCategories";

const Categories = ({ navigation }) => {
  const categoriesList = useSelector(categoriesListSelectors);
  return (
    <View>
      <ListBalanceAndCategories
        navigation={navigation}
        List={categoriesList}
        nameList={"categories"}
      />
    </View>
  );
};

export default Categories;
