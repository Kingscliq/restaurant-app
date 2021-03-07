/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../config/Colors";

function ListItemSeparator() {
  return <View style={styles.separatorStyle} />;
}

const styles = StyleSheet.create({
  separatorStyle: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.light,
  },
});

export default ListItemSeparator;
