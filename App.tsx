import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntrosliderScreen from "./screens/IntrosliderScreen"; // Adjust path as needed
import Homescreen from "./screens/Homescreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroSlider">
        <Stack.Screen
          name="IntroSlider"
          component={IntrosliderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
