import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function Button({title}) {
    return (
        <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25, // makes your button circled
        justifyContent: 'center', // puts your content in the center
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default Button;