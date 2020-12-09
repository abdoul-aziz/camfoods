import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const PlatItem = (props) => {
  return (
    <View style={styles.platItem}>
      <TouchableOpacity onPress={props.onSelectPlat}>
        <View>
          <View style={{ ...styles.platRow, ...styles.platHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.platRow, ...styles.platDetail }}>
            <Text> {props.duration} </Text>
            <Text> {props.affordability.toUpperCase()} </Text>
            <Text> {props.complexity.toUpperCase()} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  platItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  platRow: {
    flexDirection: "row",
  },
  platHeader: {
    height: "85%",
  },
  platDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default PlatItem;
// mealHeader = platHeader, mealDetail = platDetail
