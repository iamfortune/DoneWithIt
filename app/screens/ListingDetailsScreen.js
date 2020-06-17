import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

import colors from '../config/colors'

function ListingDetailsScreen() {
    return (
      <View>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red jacket for sale</AppText>
          <AppText style={styles.price}>$100</AppText>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,

    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
})

export default ListingDetailsScreen;