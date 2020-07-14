import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./Text";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
