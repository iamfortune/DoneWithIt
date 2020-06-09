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
    <AppText>I love React Native</AppText>
    </View>
  );
}
