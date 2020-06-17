import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function Card({ title, subTitle, image }) {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 200,
    }
})

export default Card;
