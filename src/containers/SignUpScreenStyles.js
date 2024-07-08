import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60, // 상단 여백
    margin: 15, // 좌우 여백
    padding: 20, // 내부의 여백
    backgroundColor: "#ffffff", // 배경색
    borderRadius: 15, // 모서리 다듬기
    justifyContent: "flex-start", // 버튼을 왼쪽으로 모음
  },
  list: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#f9f9f9", // 배경색
    height: 35, // 크기
    width: "80%", // 길이
    borderRadius: 5, // 모서리 다듬기
    marginVertical: 8, // 상하 여백
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 7,
    marginHorizontal: 6,
    marginVertical: 8,
  },
  genderContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingRight: 50,
  },
});

export default styles;
