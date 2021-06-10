import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handleOnPress = () => {console.log("Text Clicked")}; 
  const handleOnPressI = () => {
    console.log("Image Clicked");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={10} onPress={handleOnPress}>
        Big test for long text really long text going ham bruh let's doo this.
      </Text>
      <Image source={require('./assets/favicon.png')} />
      <TouchableOpacity onPress={handleOnPressI}>
        <Image blurRadius={1} source={{
          width: 200,
          height: 300,
          uri:"https://picsum.photos/200/300"}} />
        </TouchableOpacity>
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
