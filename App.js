import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View } from "react-native";

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

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) 
      alert('You need to enable permission to access the library')
  }
  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri);
    } catch (error) {
      console.log('Error reading an image')
    }
  }

  return <Screen>
    <Button title="Select Image" onPress={selectImage} />
    <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    <ImageInput imageUri={imageUri} />
  </Screen>;
}



// The Great Gatsby == the part in Daisy's dock in the book
// it has a quote, and it says...
// He had come a long way to this blue lawn, 
// and his dreams must have seemed so close,
// that he could hardly fail to grasp it...

// Inside Bill's head 