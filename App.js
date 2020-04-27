import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputPage from "./src/pages/InputPage";
import ResultPage from "./src/pages/ResultPage";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputPage">
        <Stack.Screen
          name="InputPage"
          component={InputPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
