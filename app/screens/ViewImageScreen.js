import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  Text} from 'react-native';

export default function ViewImageScreen() {
  return(
    <View style={styles.container}>
      <View style={styles.placeHolderContainer}>
        <View 
          style={[
            styles.placeHolder, 
            {backgroundColor: "green" }]} />
        <View 
          style={[
            styles.placeHolder, 
            {backgroundColor: "green" }]} />
      </View>
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
    backgroundColor: "black",
    justifyContent: "center",
  },
  placeHolderContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    top: 40,
    width: "100%"
  },
  placeHolder: {
    height: 50,
    width: 50,
  },
  image: {
    width: "100%",
    height: "100%"
  }
});