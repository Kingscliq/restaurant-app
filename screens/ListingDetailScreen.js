/** @format */

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import Colors from "../config/Colors";
import ListItem from "../components/ListItem";
function ListingDetailScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/rice.jpg")} />
      <View style={styles.descContainer}>
        <AppText style={styles.title}>Delicious Rice</AppText>
        <AppText style={styles.price}>$50</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/ajaezo.png")}
          title='Ajaezo Kingsley'
          subTitle='Chief Cook'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  descContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 7,
  },
  price: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailScreen;
