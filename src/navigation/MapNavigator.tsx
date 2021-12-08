import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

import { AppRoutes } from "./AppRoutes";
export const MapNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoutes.MAP_SCREEN} component={MapScreen} />
    </Stack.Navigator>
  );
};
