import React from "react";
import { KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import SignUpForm from "../components/signup/signupform/SignUpForm";
import styles from "../containers/SignUpScreenStyles";

function SignUpScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SignUpForm navigation={navigation} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;
