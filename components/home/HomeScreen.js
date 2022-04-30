import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useState } from "react";
import CompleteButton from "../complete/CompleteButton";

const HomeScreen = (props) => {
  let [isEmpty, setIsEmpty] = useState(true);
  const [task, setTask] = useState(task);

  const addTask = () => {
    props.setTodo([...props.todo, task]);
    //resets TextInput
    setTask("");
    setIsEmpty(false);
  };

  const deleteTodo = (index) => {
    let newTodo = [...props.todo];

    newTodo.splice(index, 1);
    props.setTodo(newTodo);
  };

  return (
    <KeyboardAvoidingView style={styles.keyboardContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.highlight}>
            <Text style={styles.headerText}>To-Do List</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Add Todo"
              placeholderTextColor="#2d3436"
              maxLength={25}
              value={task}
              onChangeText={(text) => setTask(text)}
            ></TextInput>
            <Pressable
              style={styles.addButton}
              onPress={() => {
                addTask();
              }}
            >
              <Text style={styles.addText}>Add</Text>
            </Pressable>
          </View>
          {isEmpty ? null : (
            <View style={styles.listContainer}>
              <FlatList
                data={props.todo}
                style={styles.flatList}
                renderItem={({ item, index }) => (
                  <View key={index} style={styles.flatListContainer}>
                    <CompleteButton />
                    <Text style={styles.listText}>{item}</Text>
                    <Pressable
                      style={styles.editButton}
                      onPress={() => {
                        {
                          props.navigation.navigate("EditTodo", {
                            item: item,
                          });
                        }
                      }}
                    >
                      <Text>
                        <IconComponentProvider
                          IconComponent={MaterialCommunityIcons}
                        >
                          <Icon name="pencil" size={24} color="#0067B1" />
                        </IconComponentProvider>
                      </Text>
                    </Pressable>

                    <Pressable
                      style={styles.deleteButton}
                      onPress={() => {
                        {
                          deleteTodo(index);
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
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
