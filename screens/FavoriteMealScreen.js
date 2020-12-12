import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/headerButton";
import PlatsList from "../components/PlatsList";
import { PLATS } from "../data/dummy-data";

const FavoritesMealScreen = (props) => {
  const favPlats = PLATS.filter((plat) => plat.id === "m1" || plat.id === "m2");

  return <PlatsList listData={favPlats} navigation={props.navigation} />;
};

FavoritesMealScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorites !!!",
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
  };
};

export default FavoritesMealScreen;
