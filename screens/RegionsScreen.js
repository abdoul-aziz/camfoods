import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { REGIONS } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const RegionsScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "RegionPlats",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      ></CategoryGridTitle>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={REGIONS}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegionsScreen;
