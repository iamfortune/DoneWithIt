import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Card from './app/components/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from './app/components/Icon';
import Screen from "./app/components/Screen";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from './app/screens/RegisterScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";



const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails')} />
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails", {id:1} )} />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id} </Text>
  </Screen>
)
 
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen options={{ title: "Tweet Details"}} name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}



// The Great Gatsby == the part in Daisy's dock in the book
// it has a quote, and it says...
// He had come a long way to this blue lawn, 
// and his dreams must have seemed so close,
// that he could hardly fail to grasp it...

// Inside Bill's head 