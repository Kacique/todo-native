import { Text, View } from "react-native";
import styles from "./styles";

const Todo = (task) => {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
    </View>
  );
};

export default Todo;
