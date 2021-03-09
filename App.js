/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ViewImage from "./screens/ViewImage";
import Card from "./components/Card";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ListItem from "./components/ListItem";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import Accounts from "./screens/Accounts";

export default function App() {
  return (
    // // <View style={styles.container}>
    // <MessagesScreen />
    // // </View>
    // // <ViewImage />
    // <Screen>
    //   <ListItem title='Title' ImageComponent={<Icon name='email' />} />
    // </Screen>
    // <View style={styles.container}>
    //* </View> */
    // <MessagesScreen />
    // <Accounts />
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
