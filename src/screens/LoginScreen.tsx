import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from "expo-constants";
import { Button, Colors, Headline, TextInput } from "react-native-paper";

import { AppRoutes } from "../navigation/AppRoutes";
import Header from "../components/Header";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState("");

  function handleLogin() {
    let message;
    if (email && password) {
      if (email.toLowerCase() === "admin" && password === "admin") {
        message = "Connected";
        props.navigation.navigate(AppRoutes.HOME_TABS_SCREEN);
      } else {
        message = "User not found";
      }
    } else {
      message = "Enter email and password to connect";
    }
    setNotificationMessage(message);
    console.log("login");
  }

  function navigateToTerms() {
    // navigation.navigate(AppRoutes.TERMS_SCREEN);
  }

  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }

  function headerCmp() {
    if (notificationMessage) {
      return <Header>{notificationMessage}</Header>;
    } else {
      return null;
    }
  }
  return (
    <View>
      <View style={styles.header}>
        {headerCmp()}
        <Headline style={styles.headerText}>Spacecraft</Headline>
      </View>
      <View style={styles.content}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry={isVisble}
          onChangeText={(value) => setPassword(value)}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              name={isVisble ? "eye-off" : "eye"}
            />
          }
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 256,
    backgroundColor: Colors.purple500,
  },
  headerText: {
    color: Colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
    backgroundColor: Colors.purple500,
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.grey500,
  },
});

export default LoginScreen;
