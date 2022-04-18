import { ImageBackground, Pressable, Text, View } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useState } from "react";

const CompleteButton = () => {
  let [isComplete, setIsComplete] = useState(false);

  const completeTodo = () => {
    setIsComplete(false);
    console.log("Complete");
  };

  const resetTodo = () => {
    setIsComplete(true);

    console.log("Complete");
  };

  return (
    <View style={styles.container}>
      {isComplete ? (
        <Pressable
          style={styles.completeButton}
          onPress={() => {
            {
              completeTodo();
            }
          }}
        >
          <Text>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="checkbox-intermediate" size={24} color="red" />
            </IconComponentProvider>
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.completeButton}
          onPress={() => {
            {
              resetTodo();
            }
          }}
        >
          <Text>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="square-outline" size={24} color="red" />
            </IconComponentProvider>
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default CompleteButton;

/**
 *  <Text style={isComplete ? styles.flatTextTrue : styles.flatTextFalse}>
        {task}
      </Text>
 */
