import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);

  return (
    <View style={styles.box}>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.btnRow}>
        <Button title=" - " onPress={decrementCount} />
        <Button title=" + " onPress={incrementCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    alignItems: "center",
  },
  number: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btnRow: {
    flexDirection: "row",
    gap: 20,
  },
});
