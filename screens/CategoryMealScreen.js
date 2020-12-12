import React from "react";

import { CATEGORIES, PLATS } from "../data/dummy-data";

import PlatsList from "../components/PlatsList";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  const dsiplayedPlats = PLATS.filter(
    (plat) => plat.categoryIds.indexOf(catId) >= 0
  );

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

export default CategoryMealScreen;
