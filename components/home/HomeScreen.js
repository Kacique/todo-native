import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./styles";
import { useState } from "react";

import TodoCard from "../todo/TodoCard";

const HomeScreen = (props) => {
  let [isEmpty, setIsEmpty] = useState(true);
  const [task, setTask] = useState("");

  const addTask = () => {
    props.setTodo([...props.todo, task]);
    setTask("");
    setIsEmpty(false);
  };

  console.log(props.todo[1]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.headerText}>To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Add Todo"
            placeholderTextColor="#0067B1"
            value={task}
            onChangeText={(text) => setTask(text)}
          ></TextInput>
          <Pressable
            style={styles.addButton}
            onPress={() => {
              addTask();
            }}
          >
            <Text>Add</Text>
          </Pressable>
        </View>
        {isEmpty ? null : (
          <View style={styles.listContainer}>
            <Text>{props.todo?.[0]}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
