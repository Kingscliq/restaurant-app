/** @format */

import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";
import Colors from "../config/Colors";
import HomeScreenImg from "../assets/index";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import AppText from "../components/AppText";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://images.pexels.com/photos/6341403/pexels-photo-6341403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      }}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.logoDiv}>
        <Image source={require("../assets/slate2.png")} style={styles.logo} />
        <AppText style={styles.tagline}>Your Number One Eatries</AppText>
      </View>
      <View style={styles.cardContainer}>
        <Card
          style={styles.homeScreenCard}
          image={require("../assets/beans.jpg")}
          title='Sweet Beans'
          subTitle='$200'
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' color='primary' />
        <AppButton title='Sign Up' color='secondary' />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 40,
  },
  cardContainer: {
    padding: 20,
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 60,
  },
  secondaryButton: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  homeScreenCard: {
    top: 50,
  },
  loginBtn: {
    backgroundColor: "#b677d4",
    height: 70,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoDiv: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  signUpBtn: {
    backgroundColor: "#81f0a3",
    height: 70,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: "700",
  },
});

export default HomeScreen;
