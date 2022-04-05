import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>To-Do List</Text>
        <TextInput></TextInput>
        <Button title="Add"></Button>
        <Text></Text>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
