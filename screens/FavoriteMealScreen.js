import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import HeaderButton from "../components/headerButton";
import PlatsList from "../components/PlatsList";

import DefaultText from "../components/DefaultText";

const FavoritesMealScreen = (props) => {
  const favPlats = useSelector((state) => state.plats.favoritePlats);

  if (favPlats.length == 0 || !favPlats) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.text}>
          {" "}
          Aucun Plat favoris enregistré{" "}
        </DefaultText>
      </View>
    );
  }

  return <PlatsList listData={favPlats} navigation={props.navigation} />;
};

FavoritesMealScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Mes plats favoris",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Mes plats favoris"
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavoritesMealScreen;
