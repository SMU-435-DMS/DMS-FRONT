// HomeScreenStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 20,
    width: 350, // 그 텍스트 상자의 가로 느낌?
    height: 30, // 그 텍스트 상자의 높이 느낌?
  },
  loginBtn: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 200, // 그 텍스트 상자의 가로 느낌?
    height: 30, // 그 텍스트 상자의 높이 느낌?
    backgroundColor: "blue",
  },

  loginText: {
    color: "white",
  },
  findIdPwBtn: {
    padding: 0.5,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  findIdPw: {},
  inputIdContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    marginBottom: 20,
    height: 30,
    width: 300,
  },
  inputPwContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    height: 30,
    marginBottom: 60,
    width: 300,
  },
  inputImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  // inputContainer: {
  //   flex: 1,
  //   padding: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default styles;
