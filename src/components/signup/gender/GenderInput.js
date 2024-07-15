import React from "react";
import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import styles from "../../../containers/SignUpScreenStyles";

const GenderInput = ({ gender, handleGenderChange }) => {
  return (
    <View>
      <Text>성별</Text>
      <View style={styles.genderContainer}>
        <View style={styles.genderOption}>
          <CheckBox
            value={gender.male}
            onValueChange={() => handleGenderChange("male")}
          />
          <Text> 남성</Text>
        </View>
        <View style={styles.genderOption}>
          <CheckBox
            value={gender.female}
            onValueChange={() => handleGenderChange("female")}
          />
          <Text> 여성</Text>
        </View>
      </View>
    </View>
  );
};

export default GenderInput;
