import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handleOnPress = () => console.log("Text Clicked"); 
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={10} onPress={handleOnPress}>
        Big test for long text really long text going ham bruh let's doo this.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
