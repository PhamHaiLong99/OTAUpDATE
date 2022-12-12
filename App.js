import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates"; // Updates*
export default function App() {
  React.useEffect(() => {
    (async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          // NOTIFY USER HERE
          Updates.reloadAsync();
        }
      } catch (e) {
        // HANDLE ERROR HERE
        console.error(e);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Button
          onPress={() => {
            Alert.alert("Hello World!");
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {
            Alert.alert("My name is Long!");
          }}
          title="Show Name"
          color="#8415"
          accessibilityLabel="Learn more about this purple button"
        />
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
