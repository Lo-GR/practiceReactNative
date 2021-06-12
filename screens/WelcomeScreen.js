import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  Text} from 'react-native';


export default function WelcomeScreen() {

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/background.jpg")} 
        resizeMode={"cover"} 
        style={{
          height: "100%",
          width: "100%",
          position: "absolute"
        }}/>
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
          styles.placeHolder, {
          backgroundColor: "#fc5c65",
        }]}
      />
      <View 
        style={[
          styles.placeHolder, {
          backgroundColor: "#4ECDC4",
        }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-end",
    flexWrap: "wrap"
  },
  placeHolder: {
    width: "100%",
    height: 75,
    position: "relative"
  },
  logoContainer: {
    position: "absolute",
    flexDirection: 'column',
    alignItems: "center",
    top: "15%",
  }
});