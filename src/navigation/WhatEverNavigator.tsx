import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WhatEverScreen from "../screens/WhatEverScreen";
import WhatEverItemScreen from "../screens/WhatEverItemScreen";

const Stack = createStackNavigator();

import { AppRoutes } from "./AppRoutes";
export const WhatEverNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.WHAT_EVER_SCREEN}
        component={WhatEverScreen}
      />
      <Stack.Screen
        name={AppRoutes.WHAT_EVER_ITEM_SCREEN}
        component={WhatEverItemScreen}
      />
    </Stack.Navigator>
  );
};
