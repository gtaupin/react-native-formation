import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app hello!</Text>
      <StatusBar style="auto" />
      <View>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          login
        </Button>
      </View>
    </View>
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
