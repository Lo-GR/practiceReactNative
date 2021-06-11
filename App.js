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
          height: 100
        }}
      />
      <View 
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute" //relative is relative to child comps, absolute is to parent, react native is default relative
        }}
      />
      <View 
        style={{
          backgroundColor: "tomato",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
