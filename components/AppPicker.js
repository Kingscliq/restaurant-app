/** @format */

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import Colors from "../config/Colors";
import Icon from "./Icon";
import defaultStyle from "../config/style";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  color,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const items = [
    { label: "Soups", value: 1 },
    { label: "Confectionaries", value: 2 },
    { label: "Food", value: 3 },
  ];
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              style={styles.icon}
              color={Colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Button title='close' onPress={() => setModalVisible(false)} />
        <FlatList
          keyExtractor={(item) => item.value}
          data={items}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: Colors.light,
    padding: 15,
    marginVertical: 20,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
