import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const WelcomeScreen = () => {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
        <View style={styles.loginButton}></View>
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    }
});
