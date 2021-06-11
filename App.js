import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  Alert, 
  Platform, 
  TouchableWithoutFeedback, 
  TouchableHighlight, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  Button } from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"))
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: "30%"
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
