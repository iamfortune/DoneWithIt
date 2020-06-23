import React from "react";
import { View } from "react-native";

import Card from './app/components/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from './app/components/Icon';
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return ( 
    <Screen>
    <ListItem 
    title="My title"ImageComponent={<Icon name="email"  /> } />
  </Screen>
  )
}
