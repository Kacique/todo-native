import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useState } from "react";

import TodoCard from "../todo/TodoCard";

const HomeScreen = (props) => {
  let [isEmpty, setIsEmpty] = useState(true);
  let [isComplete, setIsComplete] = useState(false);
  const [task, setTask] = useState("");

  const addTask = () => {
    props.setTodo([...props.todo, task]);
    //resets TextInput
    setTask("");
    setIsEmpty(false);
  };

  const editTodo = () => {
    console.log("Editing...");
  };

  const deleteTodo = (index) => {
    let newTodo = [...props.todo];
    newTodo.splice(index, 1);
    props.setTodo(newTodo);
  };

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
            <Text>
              <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                <Icon name="plus-thick" size={24} color="red" />
              </IconComponentProvider>
            </Text>
          </Pressable>
        </View>
        {isEmpty ? null : (
          <View style={styles.listContainer}>
            <FlatList
              data={props.todo}
              style={styles.flatList}
              renderItem={({ item, index }) => (
                <View key={index} style={styles.flatListContainer}>
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
                        <IconComponentProvider
                          IconComponent={MaterialCommunityIcons}
                        >
                          <Icon name="check-underline" size={24} color="red" />
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
                        <IconComponentProvider
                          IconComponent={MaterialCommunityIcons}
                        >
                          <Icon name="square-outline" size={24} color="red" />
                        </IconComponentProvider>
                      </Text>
                    </Pressable>
                  )}

                  <Text
                    style={
                      isComplete ? styles.flatTextTrue : styles.flatTextFalse
                    }
                  >
                    {item}
                  </Text>

                  <Pressable
                    style={styles.editButton}
                    onPress={() => {
                      {
                        editTodo();
                      }
                    }}
                  >
                    <Text>
                      <IconComponentProvider
                        IconComponent={MaterialCommunityIcons}
                      >
                        <Icon name="pencil" size={24} color="red" />
                      </IconComponentProvider>
                    </Text>
                  </Pressable>

                  <Pressable
                    style={styles.deleteButton}
                    onPress={() => {
                      {
                        deleteTodo();
                      }
                    }}
                  >
                    <Text>
                      <IconComponentProvider
                        IconComponent={MaterialCommunityIcons}
                      >
                        <Icon name="trash-can" size={24} color="red" />
                      </IconComponentProvider>
                    </Text>
                  </Pressable>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
