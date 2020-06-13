import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text>Sell Items You Don't Need</Text>
        </View>
        <View>
          <AppButton title="Login" />
          <View style={styles.registerButton}></View>
        </View>
      </ImageBackground>
    );
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    // bottom: 10,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
 logo: {
    width: 100,
    height: 100,
 },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
 