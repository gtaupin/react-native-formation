import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppTabs } from "../navigation/AppTabs";
import { WhatEverNavigator } from "../navigation/WhatEverNavigator";
import { MapNavigator } from "../navigation/MapNavigator";

const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name={AppTabs.WHAT_EVER_SCREEN_TAB}
        component={WhatEverNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Starships",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="space-station"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppTabs.MAP_TAB}
        component={MapNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomeTabsScreen;
