import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform } from 'react-native';
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
      <SafeAreaView>
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

export default MessagesScreen;


// Always add a SafeAreaView and a platform module to add space on the top of the application