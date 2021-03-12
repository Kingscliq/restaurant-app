/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ViewImage from "./screens/ViewImage";
import Card from "./components/Card";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ListItem from "./components/ListItem";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import Accounts from "./screens/Accounts";
import Listings from "./screens/Listings";
import TextBox from "./components/TextBox";
import AppButton from "./components/AppButton";
import Colors from "./config/Colors";
import AppText from "./components/AppText";
import AppPicker from "./components/AppPicker";

export default function App() {
  const [category, setCategory] = useState();

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
    // <HomeScreen />
    // <Listings />
    /* <TextInput
        placeholder='Enter FirstName'
        secureTextEntry
        style={styles.text}
      /> */

    /* <AppText style={styles.appText}>Login</AppText>
      <TextBox placeholder='Username' icon='profile' />
      <TextBox placeholder='Enter Email' icon='email' />
      <AppButton title='Login' color='primary' style={styles.button} /> */
    <Screen style={styles.container}>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        placeholder='Category'
        icon='apps'
      />
    </Screen>

    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  appText: {
    fontSize: 30,
    color: Colors.primary,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
  },
  text: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  screen: {
    padding: 20,
  },
});
