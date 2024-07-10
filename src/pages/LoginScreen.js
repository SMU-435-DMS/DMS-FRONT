import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Linking } from "react-native";
import styles from "../containers/LoginScreenStyles";

function LoginScreen({ navigation }) {
  const [addID, setAddID] = useState("");
  const [addPS, setAddPS] = useState("");

  const handleLogin = () => {
    // 로그인 버튼을 눌렀을 때의 동작을 구현 현재는 그냥 콘솔 출력 정도
    console.log("ID:", addID);
    console.log("Password:", addPS);
    // 여기서 실제 로그인 로직 추가
  };

  const openWebsite = (url) => { //website 여는 함수
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputIdContainer}>
        <Image
          source={require("../../assets/idInput.png")}
          style={styles.inputImage}
        ></Image>
        <TextInput
          placeholder="Input ID"
          value={addID}
          onChangeText={setAddID}
          style={styles.input}
        />
      </View>
      <View style={styles.inputPwContainer}>
        <Image
          source={require("../../assets/psInput.png")}
          style={styles.inputImage}
        ></Image>
        <TextInput
          placeholder="Input Password"
          value={addPS}
          onChangeText={setAddPS}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.findIdPwBtn}
        onPress={() => openWebsite("https://lily.sunmoon.ac.kr/Page2/Etc/FindID.aspx")}
      >
        <Text style={styles.findIdPw}>아이디 찾기</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.findIdPwBtn}
        onPress={() => openWebsite("https://lily.sunmoon.ac.kr/Page2/Etc/FindPW.aspx")}
      >
        <Text style={styles.findIdPw}>비밀번호 찾기</Text>
      </TouchableOpacity>

    </View>
  );
}

export default LoginScreen;