import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}> Hello Fortune, To the utmost bounds of the earth. </Text>
      <Button 
      color="blue"
      title="Welcome to DoneWit App" 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: "center",
  },
});
