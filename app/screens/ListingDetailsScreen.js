import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ListingDetailsScreen() {
    return (
       <View>
       <Image style={styles.image} source={require('../assets/jacket.jpg')} />
       </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    }
})

export default ListingDetailsScreen;