import React from "react";
import { StyleSheet, Text, Button, SafeAreaView, Dimensions, StatusBar,Platform,View } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}
