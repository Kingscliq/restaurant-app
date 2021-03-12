/** @format */

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";

import Colors from "../config/Colors";
import Icon from "./Icon";
import defaultStyle from "../config/style";

const TextBox = ({ icon, color, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.icon}
          color={Colors.medium}
        />
      )}
      <TextInput style={defaultStyle.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: Colors.light,
    padding: 15,
    marginVertical: 20,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default TextBox;
