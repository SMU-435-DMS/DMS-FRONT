import React from "react";
import { View, Button } from "react-native";
import styles from "../containers/HomeScreenStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        style={styles.button}
      />
    </View>
  );
}

export default HomeScreen;
