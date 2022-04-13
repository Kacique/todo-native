import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

const TodoCard = ({ textTodo, editTodo, deleteTodo, completeTodo, key }) => {
  return (
    <View style={styles.container}>
      {key}
      <Text style={styles.text}>{textTodo}</Text>
      <Pressable
        style={styles.editButton}
        onPress={() => {
          {
            editTodo;
          }
        }}
      >
        <Text></Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => {
          {
            deleteTodo;
          }
        }}
      >
        <Text></Text>
      </Pressable>
      <Pressable
        style={styles.completeButton}
        onPress={() => {
          {
            completeTodo;
          }
        }}
      >
        <Text></Text>
      </Pressable>
    </View>
  );
};

export default TodoCard;
