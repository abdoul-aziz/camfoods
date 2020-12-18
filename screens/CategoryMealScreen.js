import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import PlatsList from "../components/PlatsList";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availablePlats = useSelector((state) => state.plats.filtredPlats);

  const dsiplayedPlats = availablePlats.filter(
    (plat) => plat.categoryIds.indexOf(catId) >= 0
  );

  if (dsiplayedPlats == 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          Suivant le filtre que vous venez d'appliquer, il vous ai impossible de
          voir ce plat.
        </DefaultText>
      </View>
    );
  }

  return <PlatsList listData={dsiplayedPlats} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);

  var dyTitle = selectedCategory.title;
  var titles = "Plats de " + dyTitle;

  return {
    headerTitle: titles,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default CategoryMealScreen;
