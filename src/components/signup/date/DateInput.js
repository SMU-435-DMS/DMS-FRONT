import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../../containers/SignUpScreenStyles";

const DateInput = ({ date, handleDateChange }) => {
  const dateFields = [
    { placeholder: "년(4자)", key: "year", maxLength: 4 },
    { placeholder: "월", key: "month", maxLength: 2 },
    { placeholder: "일", key: "day", maxLength: 2 },
  ];

  return (
    <View>
      <Text>생년월일</Text>
      <View style={styles.dateContainer}>
        {dateFields.map((field) => (
          <TextInput
            key={field.key}
            style={styles.dateInput}
            placeholder={field.placeholder}
            keyboardType="numeric"
            maxLength={field.maxLength}
            value={date[field.key]}
            onChangeText={(value) => handleDateChange(field.key, value)}
            placeholderTextColor="rgba(0, 0, 0, 0.2)"
          />
        ))}
      </View>
    </View>
  );
};

export default DateInput;
