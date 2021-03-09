/** @format */

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../config/Colors";

function AppButton({ title, onPress, color, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default AppButton;
