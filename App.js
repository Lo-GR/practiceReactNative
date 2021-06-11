import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 150,
        height: 70
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
