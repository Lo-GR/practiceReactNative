import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

import colors from "../config/colors";

export default function ViewImageScreen() {
  return(
    <View style={styles.container}>
      <View 
        style={[
          styles.closeIcon, 
          {backgroundColor: colors.primary }]} />
      <View 
        style={[
          styles.deleteIcon, 
          {backgroundColor: colors.secondary }]} />
      <Image 
        source={require("../assets/chair.jpg")} 
        resizeMode={"contain"} 
        style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
  },
  closeIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 30
  },
  image: {
    width: "100%",
    height: "100%"
  }
});