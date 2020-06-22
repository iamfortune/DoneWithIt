import React from "react";
import { View } from "react-native";

import Card from './app/components/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from './app/components/Icon';
import Screen from "./app/components/Screen";

export default function App() {
  return ( 
    <Screen>
    <Icon 
    name="email" size={90}
    />
  </Screen>
  )
}
