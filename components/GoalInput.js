import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText !== "") {
      onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#EF2D56" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#06BA63" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: '#284B63'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#D9D9D9",
    color: "#284B63",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  },
});

export default GoalInput;
