import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/home/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App({ props }) {
  const [todo, setTodo] = useState();

  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          //component={HomeScreen}
          children={(props) => (
            <HomeScreen
              {...props}
              todo={todo}
              options={{
                title: "Home",
                headerStyle: { backgroundColor: "white" },
                headerTitleAlign: "center",
              }}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
