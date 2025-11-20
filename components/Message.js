import React from "react";
import { Text } from "react-native";

export default function Message(props) {
  return <Text style={{ fontSize: 20 }}>{props.name}</Text>;
}
