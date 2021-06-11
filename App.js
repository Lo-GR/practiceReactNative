// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Platform, StatusBar, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
  const handleOnPress = () => {
    console.log("Text Clicked")
  }; 
  const handleOnPressI = () => {
    console.log("Image Clicked");
  }
  const handleOnPressB = () => {
    // First paramter of .alert: title of alert, second paramter: message of alert, third: array of buttons
    Alert.alert("title", "message", [
      {text: "yes", onPress: () => console.log("ya")},
      {text: "no", onPress: () => console.log("nah")}
    ]);
    //first parameter of .prompt: title of alert, second parameter: message of prompt, third: a callback function for text entered.
    // Alert.prompt("title", "message", text => console.log(text))
  }
  return (
    <SafeAreaView style={[styles.container, styles.containerStyle]}>
      <Button 
        title="click Me" 
        onPress={handleOnPressB}
        color="lightblue"/>
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
      {/* <StatusBar style="auto" /> */}
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
  },
  containerStyle: {
    backgroundColor: 'orange',
  },
});
