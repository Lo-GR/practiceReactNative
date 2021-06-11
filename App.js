import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View, } from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      <View 
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300
        }}
      />
      <View 
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200
        }}
      />
      <View 
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100
        }}
      />
      <View 
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100
        }}
      />
      <View 
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row", //horizontal/vertical
    justifyContent: "center", // main axis
    alignItems: "center", // secondary axis, within each line (in terms of wrapping)
    alignContent: "center", // Secondary axis, everything, including each line
    flexWrap: "wrap"
  }
});
