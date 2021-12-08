import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "react-native-paper";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Hello</Text>
    </View>
  );
};

// eslint-disable-next-line import/no-default-export
export default MapScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: Colors.red800,
  },
});
