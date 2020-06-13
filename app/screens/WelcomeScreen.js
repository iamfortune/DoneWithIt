import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import AppButton from '../components/AppButton';
import App from '../../App';

const WelcomeScreen = () => {
    return (
      <ImageBackground
      blurRadius={2} // this made the background imae blurry
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell Items You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" color="secondary" />
        </View> 
      </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
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
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
 
// margin adds space around an object
// padding is the space inside it