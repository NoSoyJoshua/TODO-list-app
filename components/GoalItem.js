import React from "react";

import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#3C6E71",
    margin: 8,
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "#FFFFFF",
    padding: 10,
  },
});

export default GoalItem;
