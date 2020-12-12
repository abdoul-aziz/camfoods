import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import RegionsScreen from "../screens/RegionsScreen";
import PlatByRegionScreen from "../screens/PlatByRegionScreen";
import PlatDetailScreen from "../screens/PlatDetailScreen";

import Colors from "../constants/Colors";

const PlatsNavigator = createStackNavigator(
  {
    Regions: {
      screen: RegionsScreen,
      navigationOptions: {
        headerTitle: "Plats au 237",
      },
    },
    RegionPlats: {
      screen: PlatByRegionScreen,
    },
    PlatDetail: PlatDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(PlatsNavigator);
