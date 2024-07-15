import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../containers/LoginScreenStyles";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default LoginScreen;
