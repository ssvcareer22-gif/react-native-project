import { View, Text, StyleSheet } from "react-native";

export default function MenuBar() {
  return (
    <View style={styles.menu}>
      <Text style={styles.item}>Home</Text>
      <Text style={styles.item}>Profile</Text>
      <Text style={styles.item}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
    justifyContent: "space-around",
  },
  item: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
