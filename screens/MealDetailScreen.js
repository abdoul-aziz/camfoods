import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/headerButton";
import { PLATS } from "../data/dummy-data";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children} </DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const platId = props.navigation.getParam("platId");
  const selectedPlat = PLATS.find((plat) => plat.id == platId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedPlat.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText> {selectedPlat.duration} </DefaultText>
        <DefaultText> {selectedPlat.affordability.toUpperCase()} </DefaultText>
        <DefaultText> {selectedPlat.complexity.toUpperCase()} </DefaultText>
      </View>
      <Text style={styles.title}> Description </Text>
      <View style={styles.description}>
        <DefaultText> {selectedPlat.description} </DefaultText>
      </View>
      <Text style={styles.title}> Ingredients</Text>
      {selectedPlat.ingredients.map((ingredient) => (
        <ListItem key={ingredient}> {ingredient} </ListItem>
      ))}
      <Text style={styles.title}> Etapes</Text>
      {selectedPlat.steps.map((step) => (
        <ListItem key={step}> {step} </ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const platId = navigationData.navigation.getParam("platId");
  const selectedPlat = PLATS.find((plat) => plat.id == platId);

  return {
    headerTitle: selectedPlat.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item iconName="ios-star" />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  description: {
    marginHorizontal: 20,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
