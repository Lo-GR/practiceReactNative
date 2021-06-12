import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground,Image, Text} from 'react-native';

import colors from "../config/colors";

export default function WelcomeScreen() {

  return (
    <ImageBackground
      source={require("../assets/background.jpg")} 
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
          resizeMode={"contain"}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View 
        style={[
          styles.loginButton, {
          backgroundColor: colors.primary,
        }]}
      />
      <View 
        style={[
          styles.registerButton, {
          backgroundColor: colors.secondary,
        }]}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 70,
  },
  registerButton: {
    width: "100%",
    height: 70,
  },
  logo: {
    height: 100,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  }
});