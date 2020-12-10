import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { PLATS } from "../data/dummy-data";

import HeaderButton from "../components/headerButton";

const MealDetailScreen = (props) => {
  const platId = props.navigation.getParam("platId");

  const selectedPlat = PLATS.find((plat) => plat.id == platId);

  return (
    <View style={styles.screen}>
      <Text>{selectedPlat.ingredients}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const platId = navigationData.navigation.getParam("platId");
  const selectedPlat = PLATS.find((plat) => plat.id == platId);

  return {
    headerTitle: selectedPlat.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
