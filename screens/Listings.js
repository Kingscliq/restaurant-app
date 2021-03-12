/** @format */

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Jollof Rice & Drumstick",
    price: "100",
    image: require("../assets/rice.jpg"),
  },
  {
    id: 2,
    title: "Egusi Soup",
    price: "200",
    image: require("../assets/egusi.jpg"),
  },
  {
    id: 3,
    title: "Vegetable Soup",
    price: "250",
    image: require("../assets/vegetable.jpg"),
  },
  {
    id: 4,
    title: "Snail Soup",
    price: "200",
    image: require("../assets/snail.jpg"),
  },
  {
    id: 5,
    title: "Moi Moi",
    price: "100",
    image: require("../assets/momio.jpg"),
  },
  {
    id: 6,
    title: "Okra Soup",
    price: "200",
    image: require("../assets/okra.jpg"),
  },
];
const Listings = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default Listings;
