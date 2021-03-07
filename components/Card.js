/** @format */

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import Colors from "../config/Colors";
function Card({ title, subTitle, image, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
    width: "100%",
  },
  descriptionContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 7,
  },
});

export default Card;
