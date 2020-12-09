import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { HeaderButtons, Items } from "react-navigation-header-buttons";
import { PLATS } from "../data/dummy-data";

import HeaderButton from "../components/headerButton";

const MealDetailScreen = (props) => {
  const platId = props.navigation.getParam("platId");

  const renderDetailPlat = PLATS.find((plat) => plat.id == platId);

  return (
    <View style={styles.screen}>
      <Text>{renderDetailPlat.ingredients}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const platId = navigationData.navigation.getParam("platId");
  const renderDetailPlat = PLATS.find((plat) => plat.id == platId);

  return {
    headerTitle: renderDetailPlat.title,
    // headerTitle: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Items
    //       title="Favorite"
    //       iconName="ios-star"
    //       onPress={() => {
    //         console.log("llllllll");
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
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
