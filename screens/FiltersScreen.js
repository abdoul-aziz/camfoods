import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import HeaderButton from "../components/headerButton";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label} </Text>
      <Switch
        trackColor={{ false: "#767577", true: Colors.primaryColor }}
        thumbColor={props.enable ? props.colors : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={props.onEnable}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegeterianFree, setIsVegeterianFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluteenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      veganFree: isVeganFree,
      vegetarianFree: isVeganFree,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVeganFree, isVegeterianFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Filtres Vos Meilleurs Plats </Text>
      <FilterSwitch
        label="Gluteen-free"
        colors={Colors.accentColor}
        onEnable={isGlutenFree}
        onChange={() => setIsGlutenFree((previousState) => !previousState)}
      />
      <FilterSwitch
        label="Lactose-free"
        colors={Colors.accentColor}
        onEnable={isLactoseFree}
        onChange={() => setIsLactoseFree((previousState) => !previousState)}
      />
      <FilterSwitch
        label="Vegan-free"
        colors={Colors.accentColor}
        onEnable={isVeganFree}
        onChange={() => setIsVeganFree((previousState) => !previousState)}
      />
      <FilterSwitch
        label="Vegetarian-free"
        colors={Colors.accentColor}
        onEnable={isVegeterianFree}
        onChange={() => setIsVegeterianFree((previousState) => !previousState)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "lists des plats",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName="ios-menu"
            title="Menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName="ios-save"
            title="save"
            onPress={navData.navigation.getParam("save")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 8,
  },
});

export default FiltersScreen;
