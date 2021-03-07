/** @format */

import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDelete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteContainer}>
        <MaterialCommunityIcons
          name='trash-can'
          size={35}
          color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    backgroundColor: "#ff5252",
    width: 100,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemDelete;
