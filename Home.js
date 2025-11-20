import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
