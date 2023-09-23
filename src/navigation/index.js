import React from "react";

import ExpenseTrackerScreen from "../screens/ExpenseTrackerScreen ";
import EditItemScreen from "../screens/EditItemScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExpenseTracker"
          component={ExpenseTrackerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Item"
          component={EditItemScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
