import React from "react";

import ExpenseTracker from "../screens/ExpenseTracker ";
import EditItem from "../screens/EditItem";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExpenseTracker"
          component={ExpenseTracker}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Item"
          component={EditItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
