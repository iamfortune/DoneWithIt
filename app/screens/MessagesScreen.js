import React from 'react'
import { FlatList, View, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';


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
      <Screen>
       <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()} 
        renderItem={({ item }) => (
         <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
        /> )}
        ItemSeparatorComponent={() => 
        <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />}
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