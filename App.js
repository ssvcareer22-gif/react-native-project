import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: "Anjali", age: 25 })
        }
      />
    </View>
  );
}

function ProfileScreen({ route, navigation }) {
  const { name, age } = route.params;
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
