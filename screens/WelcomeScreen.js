import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,} from 'react-native';


export default function WelcomeScreen() {

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/background.jpg")} 
        resizeMode={"cover"} 
        style={{
          height: "100%",
          width: "100%",
        }}/>
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
    flexDirection: "column",
    alignItems: "flex-end",
    flexWrap: "wrap"
  },
  placeHolder: {
    width: "100%",
    height: 100,
    position: "absolute"
  }
});