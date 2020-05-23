import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, Dimensions, StatusBar,Platform,View } from "react-native";

export default function App() {
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: "30%",
      }}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
