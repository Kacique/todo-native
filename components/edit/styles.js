import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "90%",
    height: "8%",
  },
  input: {
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    borderBottomWidth: 1.5,
  },
  submitButton: {
    width: "20%",
    marginTop: 30,
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#2d3436",
    borderRadius: 5,
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    color: "#2d3436",
  },
});

export default styles;
