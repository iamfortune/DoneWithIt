import React from 'react';
import { FlatList, StyleSheet } from "react-native";

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Soft couch for sale",
    price: 700,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
        <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
            <Card 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
        }
        />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        marginTop: 10,
        backgroundColor: colors.light
    },
})

export default ListingsScreen;