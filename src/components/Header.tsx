// ./src/components/Header.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
    color: "white",
  },
});

// eslint-disable-next-line import/no-default-export
export default Header;
