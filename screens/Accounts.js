/** @format */

import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import Colors from "../config/Colors";

const menuItems = [
  {
    title: "My Foods",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
  },
];
const Accounts = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Ajaezo King'
          subTitle='ajaezokingsley@gmail.com'
          image={require("../assets/ajaezo.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title='Logout'
          IconComponent={<Icon name='logout' backgroundColor='tomato' />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "white",
  },
  screen: {
    backgroundColor: Colors.light,
  },
});

export default Accounts;
