import { useState } from "react";

import { StyleSheet, View, FlatList, Button } from "react-native";

import { StatusBar } from 'expo-status-bar';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function alterModalVisibility() {
    setModalIsVisible(previousModalIsVisible => !previousModalIsVisible);
  }

  function addGoalHandler(goal) {
    setGoals((previousGoals) => [
      ...previousGoals,
      {
        text: goal,
        key: Math.random().toString(),
      },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals(previousGoals => {
      return previousGoals.filter(goal => goal.key !== id);
    })
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add new goal' color='#E71D36' onPress={alterModalVisibility} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={alterModalVisibility} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#353535"
  },
  goalsContainer: {
    flex: 6,
    marginTop: 10,
    marginBottom: 50,
  },
});
