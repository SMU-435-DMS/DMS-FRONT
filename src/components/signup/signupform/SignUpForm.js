import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import DateInput from "../date/DateInput";
import GenderInput from "../gender/GenderInput";
import AddressInput from "../address/AddressInput";
import styles from "../../../containers/SignUpScreenStyles";

const SignUpForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState({ year: "", month: "", day: "" });
  const [name, setName] = useState("");
  const [gender, setGender] = useState({ male: false, female: false });
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleDateChange = (field, value) => {
    setDate((prevDate) => ({ ...prevDate, [field]: value }));
  };

  const handleGenderChange = (selectedGender) => {
    setGender({
      male: selectedGender === "male",
      female: selectedGender === "female",
    });
  };

  const validateInputs = () => {
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !date.year ||
      !date.month ||
      !date.day ||
      !name ||
      (!gender.male && !gender.female) ||
      !address ||
      !address2
    ) {
      Alert.alert("입력 오류", "모든 정보를 입력해 주세요.");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("비밀번호 오류", "비밀번호가 일치하지 않습니다.");
      return false;
    }

    if (password.length < 8 || password.length > 15) {
      Alert.alert(
        "비밀번호 오류",
        "비밀번호는 특수문자를 포함하여 8~15 글자여야 합니다."
      );
      return false;
    }

    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) {
      return;
    }
    const birthDate = `${date.year}-${date.month}-${date.day}`;
    const selectedGender = gender.male ? "male" : "female";

    const user = {
      id: username,
      password,
      birth: birthDate,
      name,
      gender: selectedGender,
      address: [address],
      address2: [address2],
    };

    try {
      const response = await fetch("http://192.168.0.2:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        Alert.alert("회원가입 성공", "회원가입이 성공적으로 완료되었습니다.");
        navigation.navigate("Home");
      } else {
        const errorText = await response.text();
        Alert.alert("회원가입 실패", errorText);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("회원가입 실패", "서버와 통신 중 오류가 발생했습니다.");
    }
  };

  const handleAddressSelect = (data) => {
    setAddress(data.address);
    setModalVisible(false);
  };

  const handleAddressSearch = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <Text>아이디</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력하세요"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        value={username}
        onChangeText={setUsername}
      />

      <Text>비밀번호</Text>
      <TextInput
        style={styles.input}
        placeholder="특수문자 포함 8~15 글자"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Text>비밀번호 확인</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 다시 입력하세요"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <DateInput date={date} handleDateChange={handleDateChange} />
      <Text>이름</Text>
      <TextInput
        style={styles.input}
        placeholder="이름을 입력하세요"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        value={name}
        onChangeText={setName}
      />
      <GenderInput gender={gender} handleGenderChange={handleGenderChange} />
      <AddressInput
        address={address}
        address2={address2}
        setAddress2={setAddress2}
        modalVisible={modalVisible}
        handleAddressSearch={handleAddressSearch}
        handleAddressSelect={handleAddressSelect}
        setModalVisible={setModalVisible}
      />

      <View style={{ height: 100 }} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;
