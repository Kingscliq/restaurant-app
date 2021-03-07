/** @format */

import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDelete from "../components/ListItemDelete";

function MessagesScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/ajaezo.png"),
    },
    {
      id: 2,
      title: "T2",
      description: "D3",
      image: require("../assets/prolady.jpg"),
    },
    {
      id: 3,
      title: "T2",
      description: "D3",
      image: require("../assets/profile.jpg"),
    },
  ]);

  const handleDelete = (message) => {
    // Delete from the UI
    setMessages(messages.filter((mes) => mes.id !== message.id));
    // Make delete Request to the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log(item)}
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D3",
              image: require("../assets/prolady.jpg"),
            },
            {
              id: 3,
              title: "T2",
              description: "D3",
              image: require("../assets/profile.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
