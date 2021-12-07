import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WhatEverScreen from "../screens/WhatEverScreen";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WhatEverScreen" component={WhatEverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
