import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { REGIONS, PLATS } from "../data/dummy-data";

import PlatsItem from "../components/PlatsItem";

const PlatByRegionScreen = (props) => {
  const renderPlatItem = (itemData) => {
    return (
      <PlatsItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        affordability={itemData.item.preparation}
        complexity={itemData.item.complexity}
        onSelectPlat={() => {
          props.navigation.navigate({
            routeName: "PlatDetail",
            params: { platId: itemData.item.id },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = REGIONS.find((cat) => cat.id == catId);
  const dsiplayedPlats = PLATS.filter(
    (plat) => plat.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={dsiplayedPlats}
        renderItem={renderPlatItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

PlatByRegionScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = REGIONS.find((cat) => cat.id == catId);

  var dyTitle = selectedCategory.title;
  var titles = "Plats de " + dyTitle;

  return {
    headerTitle: titles,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default PlatByRegionScreen;
