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
          backgroundColor: "#fc5c65",
          width: 100,
          height: 100,
        }}
      />
      <View 
        style={{
          backgroundColor: "#4ECDC4",
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
