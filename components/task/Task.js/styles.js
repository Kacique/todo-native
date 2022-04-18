import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Task = (props) => {
  return (
    <View style={styles.todoContent}>
      <Text style={styles.text}>{props.task}</Text>
    </View>
  );
};
export default Task;
