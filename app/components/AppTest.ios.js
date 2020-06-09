 import React from "react";
 import { Text, StyleSheet } from "react-native";
 import {} from "@expo/vector-icons";

 // headin component
 function AppText({ children }) {
   return <Text style={styles.text}>{children}</Text>;
 }

 const styles = StyleSheet.create({
   text: {
     color: "tomato",
       ios: {
         fontSize: 20,
         fontFamily: "Avenir",
       },
   },
 });

 export default AppText;

