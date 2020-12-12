import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FilterScreen from "../screens/FiltersScreen";

import FavoriteScreen from "../screens/FavoriteMealScreen";

import Colors from "../constants/Colors";

const defaultDtackNavoptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Plats au 237",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultDtackNavoptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultDtackNavoptions,
  }
);

const TabSettings = {
  Plats: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColr: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold", fontSize: 14 }}>
            Plats
          </Text>
        ) : (
          "Plats"
        ),
    },
  },
  Favoritess: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColr: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold", fontSize: 14 }}>
            Favoris
          </Text>
        ) : (
          "Favoris"
        ),
    },
  },
};

const PlatsFavTabNavigation =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(TabSettings, {
        activeTintColor: "white",
        shifting: false,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(TabSettings, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Mes Plats",
    },
    defaultNavigationOptions: defaultDtackNavoptions,
  }
);

const MainNavigation = createDrawerNavigator(
  {
    PlatsFavs: {
      screen: PlatsFavTabNavigation,
      navigationOptions: {
        drawerLabel: "Plats au 237",
      },
    },
    FilterNavigator,
  },
  {
    contentOptons: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 23,
      },
    },
  }
);
export default createAppContainer(MainNavigation);
