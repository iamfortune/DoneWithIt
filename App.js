import React, { useState } from "react";
import { View } from "react-native";

import Card from './app/components/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from './app/components/Icon';
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const categories = [
    { label: "furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Electronics", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);

  return ( 
    <Screen>
      <AppPicker 
      selectedItem={category} 
      onSelectItem={item => setCategory(item)} 
      items={categories} 
      icon="apps" 
      placeholder="Category" 
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  )
}



// The Great Gatsby == the part in Daisy's dock in the book
// it has a quote, and it says...
// He had come a long way to this blue lawn, 
// and his dreams must have seemed so close,
// that he could hardly fail to grasp it...

// Inside Bill's head 