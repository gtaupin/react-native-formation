import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeTabsScreen from "../screens/HomeTabsScreen";

const Stack = createStackNavigator();

import { AppRoutes } from "./AppRoutes";
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={AppRoutes.HOME_TABS_SCREEN}
          component={HomeTabsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*
<Stack.Screen
          name={AppRoutes.WHAT_EVER_SCREEN}
          component={WhatEverScreen}
        />
        <Stack.Screen
          name={AppRoutes.WHAT_EVER_ITEM_SCREEN}
          component={WhatEverItemScreen}
        />
        <Stack.Screen name={AppRoutes.MAP_SCREEN} component={MapScreen} />
 */
