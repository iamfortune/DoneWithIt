import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';


const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/photo.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/photo.jpeg"),
  },
];

function MessagesScreen(props) {
    return (
      <SafeAreaView style={styles.screen}>
       <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()} 
        renderItem={({ item }) =>
         <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
        /> }
        />
       </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  },
})

export default MessagesScreen;


// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // Doing the above removes the issue of an component being above the statusBar 
// Always add a SafeAreaView and a platform module to add space on the top of the application