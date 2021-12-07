import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WhatEverScreen from "../screens/WhatEverScreen";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();
import { AppRoutes } from "./AppRoutes";
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={AppRoutes.WHAT_EVER_SCREEN}
          component={WhatEverScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
