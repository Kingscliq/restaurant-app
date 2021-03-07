/** @format */

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";

const ViewImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.close}>
          <MaterialCommunityIcons name='close' size={24} color='white' />
        </View>
        <View style={styles.delete}>
          <MaterialCommunityIcons
            name='delete'
            size={24}
            color={Colors.white}
          />
        </View>
      </View>
      <Image
        source={require("../assets/background.jpg")}
        resizeMode='contain'
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  close: {
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    top: 50,
    width: "100%",
    flexDirection: "row",
  },
});

export default ViewImage;
