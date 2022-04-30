import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "space-around",
  },
  text: {
    marginLeft: 0,
  },
  completeButton: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#2d3436",
    borderRadius: 5,
  },
  flatTextTrue: {
    fontSize: 18,
    textDecorationLine: "line-through",
    marginLeft: 40,
  },
  flatTextFalse: {
    fontSize: 18,
    textDecorationLine: "none",
    marginLeft: 40,
  },
});

export default styles;
