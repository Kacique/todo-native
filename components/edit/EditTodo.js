import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { useState } from "react";

const EditTodo = (props) => {
  const { item } = props.route.params;
  const [taskEdit, onChangeText] = useState(item);

  //console.log(props.task);
  //console.log(props.todo);

  const handleTaskEdit = (index) => {
    if (taskEdit === "") {
      Alert.alert("Please enter your todo!");
    } else {
      const todosCopy = [...props.todo];
      todosCopy[index] = taskEdit;
      props.setTodo(todosCopy);
      props.navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Edit Todo"
          multiline={false}
          maxLength={25}
          value={taskEdit}
          onChangeText={onChangeText}
        ></TextInput>
      </View>
      <Pressable
        style={styles.submitButton}
        onPress={() => handleTaskEdit(props.todo.indexOf(item))}
      >
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};
export default EditTodo;
