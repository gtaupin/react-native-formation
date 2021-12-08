import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme } from "react-native-paper";

import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

import { AppRoutes } from "./AppRoutes";

export const MapNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        headerTintColor: DefaultTheme.colors.primary,
      }}
    >
      <Stack.Screen name={AppRoutes.MAP_SCREEN} component={MapScreen} />
    </Stack.Navigator>
  );
};
