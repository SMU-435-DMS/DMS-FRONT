import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import styles from "../containers/SignUpScreenStyles";

function SignUpScreen({ navigation }) {
  const [date, setDate] = useState({ year: "", month: "", day: "" });
  const [gender, setGender] = useState({
    male: false,
    female: false,
  });

  const handleDateChange = (field, value) => {
    setDate((prevDate) => ({ ...prevDate, [field]: value }));
  };

  const handleGenderChange = (selectedGender) => {
    setGender((prevGender) => ({
      male: selectedGender === "male",
      female: selectedGender === "female",
    }));
  };

  const dateFields = [
    { placeholder: "년(4자)", key: "year", maxLength: 4 },
    { placeholder: "월", key: "month", maxLength: 2 },
    { placeholder: "일", key: "day", maxLength: 2 },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>회원가입</Text>

        <Text>아이디</Text>
        <TextInput
          style={styles.input}
          placeholder=" 아이디를 입력하세요"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
        />

        <Text>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder=" 특수문자 포함 8~15 글자"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
          secureTextEntry={true}
        />

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

        <Text>이름</Text>
        <TextInput
          style={styles.input}
          placeholder=" 이름을 입력하세요"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
        />

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

        <Text>주소</Text>
        <TextInput
          style={styles.input}
          placeholder=" 주소를 입력하세요"
          placeholderTextColor="rgba(0, 0, 0, 0.2)"
        />
        <View style={{ height: 100 }} />
        <Button
          style={styles.button}
          title="회원가입"
          onPress={() => navigation.navigate("Home")}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;
