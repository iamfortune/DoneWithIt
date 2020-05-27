import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, Dimensions, StatusBar,Platform,View } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text style={{
      fontSize: 30,
      fontFamily: "Roboto",
      fontStyle: "italic",
      fontWeight: "600",
      color: "tomato",
      textTransform: "capitalize",
      textAlign: "center",
      
    }}>I'm Fortune Ikechi, but you knew that already, i want to make a shit tone of money </Text>
    </View>
  );
}
