import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, 
  ImageBackground,
  Image, 
  Text} from 'react-native';


export default function WelcomeScreen() {

  return (
    <ImageBackground
      source={require("../assets/background.jpg")} 
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={{
            height: 100,
          }}
          resizeMode={"contain"}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View 
        style={[
          styles.loginButton, {
          backgroundColor: "#fc5c65",
        }]}
      />
      <View 
        style={[
          styles.registerButton, {
          backgroundColor: "#4ECDC4",
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
  logoContainer: {
    position: "absolute",
    flexDirection: 'column',
    alignItems: "center",
    top: "15%",
    alignSelf: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  }
});