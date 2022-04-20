import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useState } from "react";
import CompleteButton from "../complete/CompleteButton";
import EditTodo from "../edit/EditTodo";

const HomeScreen = (props) => {
  let [isEmpty, setIsEmpty] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [taskEdit, onChangeText] = useState(task);

  const addTask = () => {
    props.setTodo([...props.todo, task]);
    //resets TextInput
    setTask("");
    setIsEmpty(false);
  };
  /*
  const editTodo = (index) => {
    let newTodo = [...props.todo];
    newTodo.splice(index, 1);

    props.setTodo([...props.todo, newTask]);
    setNewTask("");

    setModalVisible(!modalVisible);
  };
*/

  const editTodo = (index) => {
    const todosCopy = [...props.todo];
    todosCopy[index] = taskEdit;
    props.setTodo(todosCopy);

    onChangeText("");
    setModalVisible(!modalVisible);
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
                    <Text>{item}</Text>
                    <Pressable
                      style={styles.editButton}
                      onPress={() => {
                        {
                          setModalVisible(!modalVisible);
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
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <TextInput
                            style={styles.inputText}
                            //placeholder={item}
                            placeholderTextColor="#0067B1"
                            value={taskEdit}
                            onChangeText={onChangeText}
                          ></TextInput>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => editTodo(props.todo.indexOf(item))}
                          >
                            <Text>Edit</Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
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
