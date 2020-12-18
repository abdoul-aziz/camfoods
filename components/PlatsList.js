import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import PlatsItem from "../components/PlatsItem";

const PlatsList = (props) => {
  const favoritePlats = useSelector((state) => state.plats.filtredPlats);

  const renderPlatItem = (itemData) => {
    const isFavorite = favoritePlats.some(
      (plat) => plat.id === itemData.item.id
    );

    return (
      <PlatsItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectPlat={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              platId: itemData.item.id,
              platTitle: itemData.item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderPlatItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default PlatsList;
