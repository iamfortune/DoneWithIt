import React from 'react'
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function Card(title, subTitle, Image) {
    return (
       <View style={styles.card}>
       <Image source={Image} />
       <AppText>{title}</AppText>
       <AppText>{subTitle}</AppText>
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20
    }
})

export default Card;
