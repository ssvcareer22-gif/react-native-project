import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ marginTop: 60 }}>
      <Text style={{ fontSize: 25 }}>This is Home Screen</Text>

      <Button 
        title="Go to Profile" 
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
