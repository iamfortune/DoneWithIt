import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function ImageInput({ imageUri }) {
 return (
     <View style={styles.container}>
         {!imageUri && (<MaterialCommunityIcons color={colors.medium} name="camera" size={40} />)}
         {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
     </View>
  );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: "hidden",
        height: 100,
        width: 100,
    },
    image: {
        height: "100%",
        width: "100%",
    }
});

export default ImageInput;