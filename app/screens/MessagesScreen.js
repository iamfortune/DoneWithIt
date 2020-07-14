import React, { useState } from 'react'
import { FlatList, View, StyleSheet} from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';


const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
   const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages 
    setMessages(messages.filter((m) => m.id !== message.id));
  }
    return (
      <Screen>
       <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()} 
        renderItem={({ item }) => (
         <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/photo.jpeg"),
            },
          ]);
        }}
        />
       </Screen> 
    )
}

const styles = StyleSheet.create({
   
})

export default MessagesScreen;


// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // Doing the above removes the issue of an component being above the statusBar 
// Always add a SafeAreaView and a platform module to add space on the top of the application