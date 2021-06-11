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
          flex: 1,
        }}
      />
      <View 
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View 
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
