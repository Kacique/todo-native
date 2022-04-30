import { Pressable, Text, View } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useState } from "react";

const CompleteButton = () => {
  let [isComplete, setIsComplete] = useState(false);

  const completeTodo = () => {
    setIsComplete(false);
  };

  const resetTodo = () => {
    setIsComplete(true);
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
            <AntDesign name="checksquare" size={24} color="#2ecc71" />
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
              <Icon name="square-outline" size={24} color="#2ecc71" />
            </IconComponentProvider>
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default CompleteButton;
